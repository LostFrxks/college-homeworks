import { useState } from 'react'
import { useFetch } from './hooks/useFetch'

function App() {
  const [minAge, setMinAge] = useState('')
  const { data, loading, error } = useFetch('https://dummyjson.com/users')

  const users = data?.users || []

  const filteredUsers = users.filter((user) => {
    if (minAge === '') {
      return true
    }

    return user.age >= Number(minAge)
  })

  const handleChange = (event) => {
    setMinAge(event.target.value)
  }

  if (loading) {
    return <p className="status-message">Loading users...</p>
  }

  if (error) {
    return <p className="status-message">Something went wrong</p>
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Users List</h1>
        <p>Filter users by age</p>
      </div>

      <div className="filter-box">
        <label htmlFor="age">Show users older than:</label>
        <input
          id="age"
          type="number"
          placeholder="25"
          value={minAge}
          onChange={handleChange}
        />
      </div>

      {filteredUsers.length === 0 ? (
        <p className="status-message">No users found</p>
      ) : (
        <div className="users-list">
          {filteredUsers.map((user) => (
            <div className="user-card" key={user.id}>
              <h2>User Card</h2>
              <p>
                <span>First name:</span> {user.firstName}
              </p>
              <p>
                <span>Last name:</span> {user.lastName}
              </p>
              <p>
                <span>Age:</span> {user.age}
              </p>
              <p>
                <span>Email:</span> {user.email}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App
