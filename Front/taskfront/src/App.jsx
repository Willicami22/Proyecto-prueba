import { useEffect, useState } from "react";

const API_URL = "http://localhost:8080/tasks";

function App() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => setTasks(data));
    }, []);

    const addTask = () => {
        const newTask = { title, completed: false };
        fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTask),
        })
            .then((res) => res.json())
            .then((data) => {
                setTasks(tasks.concat(data));
                setTitle("");
            });
    };

    const deleteTask = (id) => {
        fetch(`${API_URL}/${id}`, { method: "DELETE" })
            .then(() => setTasks(tasks.filter((task) => task.id !== id)));
    };

    return (
        <div className="container">
            <h1>Gestor de Tareas</h1>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Nueva tarea" />
            <button onClick={addTask}>Agregar</button>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.title} <button onClick={() => deleteTask(task.id)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;

