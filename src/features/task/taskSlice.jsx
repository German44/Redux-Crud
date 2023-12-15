import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: "1",
        title: 'Learn Redux',
        description: 'Learn Redux',
        completed: false
    },
    {
        id: "2",
        title: 'Learn Typescript',
        description: 'Learn Typescript',
        completed: false
    }
]
export const taskSlice = createSlice({
    name: 'task',
    initialState: initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        },
        deleteTask: (state, action) => {
            // Filtra las tareas y devuelve un nuevo array sin la tarea que coincide con el ID proporcionado
            return state.filter(task => task.id !== action.payload);
        },
        editTask: (state, action) => {
            const { id, title, description } = action.payload;
            const task = state.find(task => task.id === id);
            if (task) {
                task.title = title;
                task.description = description;
            }
        }
    },
})
export const { addTask, deleteTask, editTask } = taskSlice.actions
export default taskSlice.reducer