import { useEffect, useState } from 'react'
import { getPosts } from '../api/PostApi'
import PostCard from '../components/PostCard'
import Profile from '../components/Profile'
import './HomePage.css'

export default function HomePage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPosts()
      setPosts(data)
      setLoading(false)
    }
    fetchData()
  }, [])

  if (loading) return <p>로딩 중...</p>

  return (
    <div className="home-container">
      <Profile postCount={posts.length} />
      <div className="post-grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
} 