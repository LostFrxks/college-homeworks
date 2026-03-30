import { useEffect, useState } from 'react'

const initialForm = {
  firstName: '',
  lastName: '',
  age: '',
  email: '',
}

function App() {
  const [users, setUsers] = useState([])
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users')
        const data = await response.json()
        setUsers(data.users || [])
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!form.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!form.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!form.email.includes('@')) {
      newErrors.email = 'Email must contain @'
    }

    if (Number(form.age) <= 0) {
      newErrors.age = 'Age must be greater than 0'
    }

    return newErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const validationErrors = validateForm()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    const newUser = {
      id: Date.now(),
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      age: Number(form.age),
      email: form.email.trim(),
    }

    setUsers((prev) => [newUser, ...prev])
    setForm(initialForm)
    setErrors({})
  }

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase()
    const email = user.email.toLowerCase()
    const searchValue = search.toLowerCase().trim()

    return fullName.includes(searchValue) || email.includes(searchValue)
  })

  return (
    <div className="app">
      <div className="container">
        <header className="app__header">
          <h1 className="app__title">Users List</h1>
          <p className="app__text">React app for users, search and adding new user.</p>
        </header>

        <section className="form-block">
          <h2 className="form-block__title">Add user</h2>

          <form className="form-block__form" onSubmit={handleSubmit}>
            <div className="form-block__field">
              <input
                className={`form-block__input ${errors.firstName ? 'form-block__input--error' : ''}`}
                type="text"
                name="firstName"
                placeholder="First name"
                value={form.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p className="form-block__error">{errors.firstName}</p>}
            </div>

            <div className="form-block__field">
              <input
                className={`form-block__input ${errors.lastName ? 'form-block__input--error' : ''}`}
                type="text"
                name="lastName"
                placeholder="Last name"
                value={form.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <p className="form-block__error">{errors.lastName}</p>}
            </div>

            <div className="form-block__field">
              <input
                className={`form-block__input ${errors.age ? 'form-block__input--error' : ''}`}
                type="number"
                name="age"
                placeholder="Age"
                value={form.age}
                onChange={handleChange}
              />
              {errors.age && <p className="form-block__error">{errors.age}</p>}
            </div>

            <div className="form-block__field">
              <input
                className={`form-block__input ${errors.email ? 'form-block__input--error' : ''}`}
                type="text"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <p className="form-block__error">{errors.email}</p>}
            </div>

            <button className="form-block__button" type="submit">
              Add user
            </button>
          </form>
        </section>

        <section className="users">
          <div className="users__top">
            <h2 className="users__title">All users</h2>
            <input
              className="users__search"
              type="text"
              placeholder="Search by name or email"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          {loading ? (
            <p className="users__message">Loading...</p>
          ) : filteredUsers.length === 0 ? (
            <p className="users__message">Users not found</p>
          ) : (
            <div className="users__list">
              {filteredUsers.map((user) => (
                <article className="user-card" key={user.id}>
                  <h3 className="user-card__name">
                    {user.firstName} {user.lastName}
                  </h3>
                  <p className="user-card__info">Age: {user.age}</p>
                  <p className="user-card__info">Email: {user.email}</p>
                  <p className="user-card__info">ID: {user.id}</p>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default App
