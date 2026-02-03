import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Mini Blog</h1>
        <nav className="app__nav">
          <Link to="/">Home</Link>
          <Link to="/contacts">Contacts</Link>
          <Link to="/posts">Posts</Link>
        </nav>
      </header>

      <main className="app__content">
        <Outlet />
      </main>
    </div>
  )
}
