import { useState } from "react"
import Swal from "sweetalert2"

const Formulario = ({agregarTodo}) => {
    const initialState =  {
        nombre: '',
        descripcion: '',
        estado: false,
        prioridad: false
    }

    const [todo , setTodo] = useState(initialState)

    const {nombre,descripcion,estado,prioridad} = todo

    const handleSubmit = (e) => {
        e.preventDefault()
        e.target[0].focus();
        if(!nombre.trim()){
            e.target[0].focus();
            Swal.fire({
                title: "Error!",
                text: "No deje el nombre en blanco",
                icon: "error"
            })
            return
        }

        if(!descripcion.trim()){
            Swal.fire({
                title: "Error!",
                text: "No deje la descripcion en blanco",
                icon: "error"
            })
            return
        }

        Swal.fire({
            title: "Exito!",
            text: "Tarea agregada",
            icon: "success"
        })

        agregarTodo({
            nombre: nombre,
            descripcion: descripcion,
            estado: estado,
            prioridad: prioridad,
            id: Date.now()
        })

        setTodo(initialState)

    }

    const handleChange = (e) => {
        const {name,value,checked,type} = e.target

        setTodo((old) => ({
            ...old,
            [name]: type === "checkbox" ? checked : value /*Hicimos haci por el checkbox ya que es algo especial, porque es lo mismo que hay debajo*/
        }))
        // }setTodo({
        //     ...todo,
        //     [e.target.name]: e.target.value
        // })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="nombre"
                placeholder="Ingrese nombre de la tarea"
                value={nombre}
                onChange={handleChange}
            />
            <textarea 
                name="descripcion"
                placeholder="Descripcion de la tarea"
                value={descripcion}
                onChange={handleChange}
                >
            </textarea>
            <select 
                name="estado"
                value={estado}
                onChange={handleChange}
                >
                <option value={false}>Pendiente</option>
                <option value={true}>Realizada</option>
            </select>
            <div>
                <input 
                    id="flexCheckDefault"
                    type="checkbox"
                    name="prioridad" 
                    checked={prioridad}
                    onChange={handleChange}
                />
                <label htmlFor="flexCheckDefault">Default checkbox</label>
            </div>
            <button>Agregar</button>
        </form>
    )
}

export default Formulario