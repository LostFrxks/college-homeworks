import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home/home.jsx'
import Contacts from './pages/Contacts/contacts.jsx'
import Posts from './pages/Posts/posts.jsx'
import PostDetail from './pages/PostDetail/postDetail.jsx'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Route>
    </Routes>
  )
}
