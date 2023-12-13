import { useSelector, useDispatch } from 'react-redux'
import { deleteTask } from '../features/task/taskSlice'

const TaskList = () => {
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }
    const task = useSelector((state) => state.task)

    return (
        <div>
            {task.map((task) => (
                <div className="flex flex-col w-1/2" key={task.id}>
                    <h1 className=" bg-slate-500 p-2 m-2 rounded-full ">{task.title}</h1>
                    <p className="  bg-slate-500 p-2 m-2 rounded-full ">{task.description}</p>
                    <button onClick={() => handleDelete(task.id)} className='p-2 bg-red-500 rounded-full hover:bg-red-400 '>Borrar</button>
                </div>

            ))}
        </div>
    )
}

export default TaskList