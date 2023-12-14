import { useSelector, useDispatch } from 'react-redux'
import { deleteTask } from '../features/task/taskSlice'
import { Link } from 'react-router-dom'

const TaskList = () => {

    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }
    const task = useSelector((state) => state.task)



    return (

        <div className='flex flex-col w-1/2'>
            <Link className='p-2 bg-green-500 rounded-full hover:bg-green-300 font-bold text-center ' to="/create">Añadir Nueva Tarea</Link>
            {task.map((task) => (
                <div className="flex flex-col " key={task.id}>
                    <h1 className=" bg-slate-500 p-2 m-2 rounded-full text-center text-lg font-bold">{task.title}</h1>
                    <p className="  bg-slate-500 p-2 m-2 rounded-full text-center text-lg font-semibold">{task.description}</p>
                    <button onClick={() => handleDelete(task.id)} className='p-2 bg-red-500 rounded-full hover:bg-red-400 text-lg font-bold'>Borrar</button>
                    <Link to={`/edit/${task.id}`} className='p-2 bg-blue-500 rounded-full hover:bg-blue-400 text-center text-lg font-bold'>Editar</Link>
                </div>
            ))}
        </div>
    )
}

export default TaskList