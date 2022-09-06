import { Button } from "@mui/material"

const ToDo = ({todo , eliminarTodo , editarTodo}) => {
    const {id,nombre,descripcion,estado,prioridad} = todo

    return (
        <li>
            <span>Nombre: {nombre}</span>
            <span>Descripcion: {descripcion}</span>
            <span>Estado: {estado ? 'Finalizado': 'Pendiente'}</span>
            <span>Prioridad: {prioridad ? 'Prioritario' : 'No es prioritario' }</span>
            <Button onClick={()=> eliminarTodo(id) } variant="outlined" color="primary">Eliminar</Button>
            <Button onClick={()=> editarTodo(id) } variant="outlined" color="primary">Editar</Button>
        </li>
    )
}

export default ToDo