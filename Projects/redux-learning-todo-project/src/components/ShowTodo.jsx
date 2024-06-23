/*This page is for reading or accessing data from our store */ 
import React from 'react'
import { useSelector } from 'react-redux'

export default function ShowTodo() {
    const todos = useSelector(state => state.todoS)
    console.log(todos);
  return (
    <>
      <div>My Todos</div>
      {todos.map((todo) =>
      (<div className='w-2/4 bg-orange-500 p-1 mb-4' key={todo.id}> {todo.text} </div>)
    )}
    </>
  )
}
