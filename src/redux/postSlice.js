import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/admin/posts';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const res = await axios.get(BASE_URL);
  console.log(res);
  return res.data;
});

export const createPost = createAsyncThunk('posts/createPost', async (post) => {
  const res = await axios.post(BASE_URL, post);
  return res.data;
});

export const updatePost = createAsyncThunk('posts/updatePost', async ({ id, updatedPost }) => {
  const res = await axios.put(`${BASE_URL}/${id}`, updatedPost);
  return res.data;
});

export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
  return id;
});

const postSlice = createSlice({
  name: 'posts',
  initialState: { items: [], status: 'idle', error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const index = state.items.findIndex(post => post.id === action.payload.id);
        state.items[index] = action.payload;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.items = state.items.filter(post => post.id !== action.payload);
      });
  },
});

export default postSlice.reducer;
