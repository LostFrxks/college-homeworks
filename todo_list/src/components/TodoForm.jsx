import { useState } from "react";
export default function TodoForm({ addTask }) {
    const [text, setText] = useState("");


    return (
        <form
            className="todo-form"
            onSubmit={(e) => {
                e.preventDefault()
                if(!text.trim()) return
                addTask(text)
                setText("")
            }}
            >
            <input type="text" placeholder="Enter a new task" value={text} onChange={(e) => setText(e.target.value)} className="input1"/>
            <button type="submit">Add Task</button>
        </form>
    )
}
