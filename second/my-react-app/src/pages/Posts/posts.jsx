import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPosts } from '../../api/jsonPlaceholder.js'
import './posts.css'

export default function Posts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true
    const loadPosts = async () => {
      setLoading(true)
      setError(null)

      try {
        const data = await getPosts()
        if (!isMounted) return
        setPosts(data)
      } catch (err) {
        if (!isMounted) return
        setError(err?.message || 'Failed to load posts.')
      } finally {
        if (!isMounted) return
        setLoading(false)
      }
    }

    loadPosts()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section className="page">
      <div className="page__header">
        <h2>Posts</h2>
      </div>

      {loading && <p>Loading posts...</p>}
      {error && <p className="text-error">{error}</p>}

      <div className="card-list">
        {posts.map((post) => (
          <article key={post.id} className="card">
            <h3 className="card__title">{post.title}</h3>
            <Link className="button button--link" to={`/posts/${post.id}`}>
              Open post
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
