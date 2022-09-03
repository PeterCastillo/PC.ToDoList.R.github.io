import Formulario from "./Formulario"
import { useState } from "react"
import Todo from "./ToDo"

const TodoList = () => {
    const[todos, setTodos] = useState([])

    const agregarTodo = (todo) => {
        setTodos((old)=>[...old,todo])
    }

    const eliminarTodo = (id) => {
        setTodos((old) => old.filter(item => item.id !== id ))
    }

    const editarTodo = (id) => {
        const editarEstado = todos.map(item => (
            item.id === id ? {...item, estado: !item.estado} : item
        ))
        setTodos(editarEstado)
    }
 
    return (
        <div>
            <Formulario agregarTodo={agregarTodo}/>
            <ul>
                {todos.map((item) => (
                <Todo key={item.id} todo={item} eliminarTodo={eliminarTodo} editarTodo={editarTodo}/>
                ))}
            </ul>
        </div>
    )
}

export default TodoList