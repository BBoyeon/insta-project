import { useNavigate } from 'react-router-dom'
import './PostCard.css'

export default function PostCard({ post }) {
  const navigate = useNavigate()

  return (
    <div className="post-card" onClick={() => navigate(`/post/${post.id}`)}>
      <img src={post.image_url} alt={post.title} />
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
} 