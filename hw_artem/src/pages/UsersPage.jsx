import { useEffect, useState } from 'react'
import UserCard from '../components/UserCard'

function UsersPage() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if (!response.ok) {
          throw new Error('Ошибка загрузки списка пользователей')
        }

        const data = await response.json()
        setUsers(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  return (
    <main className="users-page">
      <h1 className="users-page__title">Список пользователей</h1>

      {loading && <p className="users-page__status">Загрузка...</p>}
      {error && <p className="users-page__status users-page__status--error">{error}</p>}

      {!loading && !error && (
        <section className="users-page__grid">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </section>
      )}
    </main>
  )
}

export default UsersPage
