import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask, editTask } from "../features/task/taskSlice"
import { v4 as uuid } from "uuid"
import { useNavigate, useParams } from "react-router-dom"

const TaskForm = () => {

    const params = useParams()
    const navigate = useNavigate()
    const tasks = useSelector((state) => state.task)

    useEffect(() => {
        if (params.id) {
            setTask(tasks.find(task => task.id === params.id))
        }
    }, [])

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

        if (params.id) {
            dispatch(editTask(task))
            navigate('/')
            return
        }
        else {
            dispatch(addTask({ ...task, id: uuid() })) //Libreria Id unico
            navigate('/')
        }

    }

    return (
        <form className="flex flex-col w-1/2" onSubmit={handleSubmit}>
            <input className="p-2 m-2 rounded-full " name="title" type="text" placeholder="Tarea" onChange={handleChange} value={task.title} />
            <textarea className="p-2 m-2 rounded-full " name="description" placeholder="Descripción" onChange={handleChange} value={task.description}></textarea>
            <button className="p-2 bg-green-700 rounded-full hover:bg-green-400">Añadir</button>
        </form>
    )
}

export default TaskForm