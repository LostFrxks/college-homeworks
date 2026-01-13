import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList.jsx'

function App() {
  const [tasks, setTasks] = useState([])

  function addTask(task) {
    const newTask = {
      id: Date.now(),
      text: task,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  function deleteTask(id){
    const updatedTasks = tasks.filter((task) => task.id !== id)
    setTasks(updatedTasks)
  }

  function toggleTaskCompletion(id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTasks(updatedTasks)
  }

  return (
    <>
      <TodoForm addTask={addTask}></TodoForm>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <TodoList tasks={tasks} onDelete={deleteTask} toggleTaskCompletion={toggleTaskCompletion} />
      )}
    </>
  )
}

export default App
