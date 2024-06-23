import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../slices/todo';

export default function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch()

    const addTodoHandler = (e) =>{
        e.preventDefault()

        dispatch(addTodo(input));
        setInput('');
    }
  return (
    <>
      <form onSubmit={addTodoHandler}>
        <input type="text" placeholder='Enter a todo....' value={input} 
        onChange={(e) => setInput(e.target.value)}  className='bg-transparent border-2 p-3 mr-3 rounded-lg'/>

        <button type='submit' className='bg-green-600 p-3 rounded-lg text-white font-bold'> Add Todo</button>
      </form>
    </>
  )
}
