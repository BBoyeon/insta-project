import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPostById } from "../api/PostApi";
import Comment from "../components/Comment";
import './DetailPage.css';

export default function DetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
      const postData = await getPostById();
      const targetPost = postData.find((p) => String(p.id) === id);
      setPost(targetPost);
      } catch (err){
        console.error("불러오기 실패 : ",err)
      }
    };
    fetchData();
  }, [id]);

  if (!post) return <p>로딩 중...</p>;

  return (
    <div className="detail-container">
      <img src={post.image_url} alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Comment postId={id} />
    </div>
  );
}
