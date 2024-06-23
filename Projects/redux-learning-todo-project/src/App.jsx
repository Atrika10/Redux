import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import ShowTodo from './components/ShowTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen bg-black text-white m-auto p-40'>
      <h1 className="text-green-500 font-bold">ToDo</h1>
      <AddTodo/>
      <ShowTodo/>
      </div>
      
    </>
  )
}

export default App
