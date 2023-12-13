import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../features/task/taskSlice"
import { v4 as uuid } from "uuid"

const TaskForm = () => {

    const dispatch = useDispatch()
    const [task, setTask] = useState({
        title: '',
        description: ''
    })

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTask({ ...task, id: uuid() })) //Libreria Id unico
    }
    return (
        <form className="flex flex-col w-1/2" onSubmit={handleSubmit}>
            <input className="p-2 m-2 rounded-full " name="title" type="text" placeholder="Tarea" onChange={handleChange} />
            <textarea className="p-2 m-2 rounded-full " name="description" placeholder="Descripción" onChange={handleChange}></textarea>
            <button className="p-2 bg-green-700 rounded-full hover:bg-green-400">Añadir</button>
        </form>
    )
}

export default TaskForm