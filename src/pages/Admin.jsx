import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  createPost,
  updatePost,
  deletePost,
} from "../redux/postSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Admin() {
  const dispatch = useDispatch();
  const { items: posts } = useSelector((state) => state.posts);

  const [form, setForm] = useState({ title: "", body: "", id: null });

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      dispatch(
        updatePost({
          id: form.id,
          updatedPost: { title: form.title, body: form.body },
        })
      );
    } else {
      dispatch(createPost({ title: form.title, body: form.body }));
    }
    setForm({ title: "", body: "", id: null });
  };

  const handleEdit = (post) => {
    setForm(post);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder="Title"
          value={form.title}
          className=" text-gray-700"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <Input
          placeholder="Body"
          value={form.body}
          className=" text-gray-700"
          onChange={(e) => setForm({ ...form, body: e.target.value })}
        />
        <Button type="submit">{form.id ? "Update Post" : "Create Post"}</Button>
      </form>

      <hr />

      {posts.map((post) => (
        <div
          key={post.id}
          className="border rounded-xl p-4 bg-white shadow-sm space-y-2"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="mb-2 sm:mb-0">
              <h3 className="font-semibold text-lg text-gray-800">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600">
                {post.body.slice(0, 80)}
                {post.body.length > 80 && "..."}
              </p>
            </div>
            <div className="flex gap-2 mt-2 sm:mt-0">
              <Button onClick={() => handleEdit(post)} size="sm">
                Edit
              </Button>
              <Button
                onClick={() => dispatch(deletePost(post.id))}
                size="sm"
                variant="destructive"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
