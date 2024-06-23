/*This page is for reading or accessing data from our store */ 
import React from 'react'
import { useSelector } from 'react-redux'

/* To make(write) some changes in our store, we'll use useDispatch */
import { useDispatch } from 'react-redux';
import {removeTodo} from '../slices/todo'

export default function ShowTodo() {
    const todos = useSelector(state => state.todoS)
    console.log(todos);

    const dispatch = useDispatch();
  return (
    <>
      <div className='mt-2 mb-5'>My Todos</div>
      {todos.map((todo) =>
      (<div className='w-2/4 bg-orange-500 p-1 mb-4 flex justify-between' key={todo.id}> {todo.text} 
       <button onClick={()=>dispatch(removeTodo(todo.id))} className='bg-red-800 p-1 rounded-lg'>✖</button>
       </div> )
    )}
    </>
  )
}
