import { useMemo, useState } from 'react'
import './App.css'
import SearchInput from './components/SearchInput'
import UserList from './components/UserList'
import { useFetch } from './hooks/useFetch'
import { getUsers } from './services/userService'

function App() {
  const [search, setSearch] = useState('')
  const { data: users, loading, error } = useFetch(getUsers, [])

  const filteredUsers = useMemo(() => {
    const searchText = search.toLowerCase()

    return users.filter((user) =>
      user.name.toLowerCase().includes(searchText),
    )
  }, [users, search])

  return (
    <main className="app">
      <h1>Users</h1>

      <SearchInput value={search} onChange={setSearch} />

      {loading && <p className="status">Loading users...</p>}

      {error && <p className="error">{error}</p>}

      {!loading && !error && <UserList users={filteredUsers} />}
    </main>
  )
}

export default App
