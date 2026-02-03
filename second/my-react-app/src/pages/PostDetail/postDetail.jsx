import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getCommentsByPostId, getPostById } from '../../api/jsonPlaceholder.js'
import './postDetail.css'

export default function PostDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [comments, setComments] = useState([])
  const [commentsLoading, setCommentsLoading] = useState(false)
  const [commentsError, setCommentsError] = useState(null)
  const [commentsVisible, setCommentsVisible] = useState(false)

  useEffect(() => {
    let isMounted = true
    const loadPost = async () => {
      setLoading(true)
      setError(null)

      try {
        const data = await getPostById(id)
        if (!isMounted) return
        setPost(data)
      } catch (err) {
        if (!isMounted) return
        setError(err?.message || 'Failed to load post.')
      } finally {
        if (!isMounted) return
        setLoading(false)
      }
    }

    loadPost()

    return () => {
      isMounted = false
    }
  }, [id])

  const handleToggleComments = () => {
    if (commentsVisible) {
      setCommentsVisible(false)
      return
    }

    setCommentsVisible(true)
    setCommentsLoading(true)
    setCommentsError(null)

    getCommentsByPostId(id)
      .then((data) => {
        setComments(data)
      })
      .catch((err) => {
        setCommentsError(err?.message || 'Failed to load comments.')
      })
      .finally(() => {
        setCommentsLoading(false)
      })
  }

  return (
    <section className="page">
      <div className="page__header">
        <h2>Post detail</h2>
        <div className="page__actions">
          <button
            className="button"
            type="button"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <Link className="button button--ghost" to="/posts">
            All posts
          </Link>
        </div>
      </div>

      {loading && <p>Loading post...</p>}
      {error && <p className="text-error">{error}</p>}

      {post && (
        <article className="card card--wide">
          <h3 className="card__title">{post.title}</h3>
          <p className="card__body">{post.body}</p>
        </article>
      )}

      <section className="comments">
        <button className="button button--link" type="button" onClick={handleToggleComments}>
          {commentsVisible ? 'Hide comments' : 'Show comments'}
        </button>

        {commentsVisible && (
          <div className="comments__content">
            {commentsLoading && <p>Loading comments...</p>}
            {commentsError && <p className="text-error">{commentsError}</p>}
            {!commentsLoading && !commentsError && (
              <ul className="comments__list">
                {comments.map((comment) => (
                  <li key={comment.id} className="comment-card">
                    <h4 className="comment-card__title">{comment.name}</h4>
                    <p className="comment-card__body">{comment.body}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </section>
    </section>
  )
}
