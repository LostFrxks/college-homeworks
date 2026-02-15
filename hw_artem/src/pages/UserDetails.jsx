import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function UserDetails() {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true)
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

        if (!response.ok) {
          throw new Error('Ошибка загрузки пользователя')
        }

        const data = await response.json()
        setUser(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [id])

  return (
    <main className="user-details">
      <Link className="user-details__back" to="/users">
        Назад к списку
      </Link>

      {loading && <p className="user-details__status">Загрузка...</p>}
      {error && <p className="user-details__status user-details__status--error">{error}</p>}

      {!loading && !error && user && (
        <section className="user-details__card">
          <h1 className="user-details__title">Информация о пользователе</h1>

          <p className="user-details__item">
            <span className="user-details__label">ID:</span> {user.id}
          </p>
          <p className="user-details__item">
            <span className="user-details__label">Name:</span> {user.name}
          </p>
          <p className="user-details__item">
            <span className="user-details__label">Username:</span> {user.username}
          </p>
          <p className="user-details__item">
            <span className="user-details__label">Email:</span> {user.email}
          </p>
          <p className="user-details__item">
            <span className="user-details__label">Phone:</span> {user.phone}
          </p>
          <p className="user-details__item">
            <span className="user-details__label">Website:</span> {user.website}
          </p>
          <p className="user-details__item">
            <span className="user-details__label">Company:</span> {user.company?.name}
          </p>
          <p className="user-details__item">
            <span className="user-details__label">City:</span> {user.address?.city}
          </p>
        </section>
      )}
    </main>
  )
}

export default UserDetails
