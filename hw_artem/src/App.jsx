import { Navigate, Route, Routes } from 'react-router-dom'
import UsersPage from './pages/UsersPage'
import UserDetails from './pages/UserDetails'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate to="/users" replace />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </div>
  )
}

export default App
