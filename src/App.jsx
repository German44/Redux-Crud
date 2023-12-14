import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {

  const task = useSelector((state) => state.task)

  return (

    <main className='flex flex-col items-center '>
      <h1 className='text-3xl font-bold p-3'>To-DO con Redux</h1>
      <h2 className='text-xl  font-bold p-3'>{task.length} Tareas sin realizar</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/create" element={<TaskForm />} />
          <Route path="/edit/:id" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </main>

  );
}

export default App;
