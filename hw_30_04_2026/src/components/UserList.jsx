export default function UserList({ users }) {
  if (users.length === 0) {
    return <p className="status">Users not found</p>
  }

  return (
    <div className="user-list">
      {users.map((user) => (
        <div className="user-card" key={user.id}>
          <p>{user.name}</p>
          <span>{user.email}</span>
        </div>
      ))}
    </div>
  )
}
