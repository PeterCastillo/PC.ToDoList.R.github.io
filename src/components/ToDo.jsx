const Todo = ({todo , eliminarTodo , editarTodo}) => {
    const {id,nombre,descripcion,estado,prioridad} = todo

    return (
        <li>
            <span>Nombre: {nombre}</span>
            <span>Descripcion: {descripcion}</span>
            <span>Estado: {estado ? 'Finalizado': 'Pendiente'}</span>
            <span>Prioridad: {prioridad ? 'Prioritario' : 'No es prioritario' }</span>
            <button onClick={()=> eliminarTodo(id) }>Eliminar</button>
            <button onClick={()=> editarTodo(id) }>Editar</button>
        </li>
    )
}

export default Todo