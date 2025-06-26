import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from '@/components/ui/button';

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = useSelector((state) =>
    state.posts.items.find((p) => p.id.toString() === id)
  );

  if (!post) return <p className="text-center mt-10">Post not found</p>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-700">{post.title}</h1>
      <p className="mt-4 text-gray-700">{post.body}</p>
      <Button className="mt-6" onClick={() => navigate(-1)}>Back</Button>
    </div>
  );
}
