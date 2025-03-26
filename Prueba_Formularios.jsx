import { useEffect, useState } from "react";

const API_URL = "http://localhost:8080/persons"; // Cambia esto con la URL del backend en Azure

function App() {
    const [people, setPeople] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => setPeople(data));
    }, []);

    const addPerson = () => {
        const newPerson = { name, email, age: Number(age) };
        fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPerson),
        })
            .then((res) => res.json())
            .then((data) => {
                setPeople([...people, data]);
                setName("");
                setEmail("");
                setAge("");
            });
    };

    return (
        <div className="container">
            <h1>Gestor de Personas</h1>

            {/* Formulario */}
            <div>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo" type="email" />
                <input value={age} onChange={(e) => setAge(e.target.value)} placeholder="Edad" type="number" />
                <button onClick={addPerson}>Agregar</button>
            </div>

            {/* Lista de Personas */}
            <ul>
                {people.map((person) => (
                    <li key={person.id}>
                        {person.name} - {person.email} ({person.age} años)
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
