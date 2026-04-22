import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import RegistrationForm from './components/RegistrationForm'
import SubmittedData from './components/SubmittedData'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

function App() {
  const [submittedUser, setSubmittedUser] = useState(null)

  const handleRegister = (formData) => {
    const userData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    }

    setSubmittedUser(userData)
    toast.success('Регистрация прошла успешно!')
  }

  return (
    <main className="page">
      <div className="page__container">
        <section className="card">
          <div className="card__header">
            <p className="card__subtitle">React Hook Form</p>
            <h1 className="card__title">Форма регистрации пользователя</h1>
          </div>

          <div className="card__content">
            <RegistrationForm onRegister={handleRegister} />
            <SubmittedData submittedUser={submittedUser} />
          </div>
        </section>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </main>
  )
}

export default App
