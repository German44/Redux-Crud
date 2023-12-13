
import './App.css'

import TaskForm from './components/TaskForm'
import  TaskList from './components/TaskList'


function App() {
 

  return (
    <>
      <h1>To-DO con Redux</h1>
      <TaskForm />
      <TaskList/>
    </>
  )
}

export default App
