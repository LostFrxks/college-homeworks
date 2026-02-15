import { Link } from 'react-router-dom'

function UserCard({ user }) {
  return (
    <article className="user-card">
      <h2 className="user-card__name">{user.name}</h2>
      <p className="user-card__field">
        <span className="user-card__label">Username:</span> {user.username}
      </p>
      <p className="user-card__field">
        <span className="user-card__label">Email:</span> {user.email}
      </p>
      <p className="user-card__field">
        <span className="user-card__label">Phone:</span> {user.phone}
      </p>
      <Link className="user-card__button" to={`/users/${user.id}`}>
        Подробнее
      </Link>
    </article>
  )
}

export default UserCard
