export default function TodoItem({ task, onDelete, toggleTaskCompletion }) {
  return (
    <div className="todo-item">
      <span>{task.text}</span>
      <button className={`status-btn ${task.completed ? "undo" : "done"}`}
        onClick={() => toggleTaskCompletion(task.id)}>
        {task.completed ? 'Undo' : 'Done'}
      </button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  )
}