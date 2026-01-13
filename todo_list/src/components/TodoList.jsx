import TodoItem from "./TodoItem";
export default function TodoList({ tasks, onDelete, toggleTaskCompletion }) {
    return (
        <div className="todo-list">
            {tasks.map((task) => (
                <TodoItem
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    toggleTaskCompletion={toggleTaskCompletion}
                />
            ))}
        </div>
    )
}