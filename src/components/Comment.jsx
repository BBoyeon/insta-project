// src/components/Comment.jsx
import { useEffect, useState } from 'react'
import { getComments, postComment, deleteComment } from "../api/CommentApi";
import './Comment.css'

export default function Comment({ postId }) {
  const [comments, setComments] = useState([])
  const [input, setInput] = useState('')

  const fetchComments = async () => {
    const data = await getComments(postId)
    setComments(data)
  }

  useEffect(() => {
    fetchComments()
  }, [postId])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await postComment(postId, input)
    setInput('')
    fetchComments()
  }

  const handleDelete = async (commentId) => {
    await deleteComment(commentId)
    fetchComments()
  }

  return (
    <div className="comment-box">
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="댓글을 입력하세요"
        />
        <button type="submit">작성</button>
      </form>
      <ul className="comment-list">
       {comments.map((c) => (
         <li key={c.comment_id}> 
           <span>익명 | {c.content}</span>
           <button onClick={() => handleDelete(c.comment_id)}>삭제</button>
         </li>
       ))}
      </ul>

    </div>
  )
}
