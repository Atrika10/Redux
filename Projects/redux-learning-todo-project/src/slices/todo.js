// slice
import { createSlice, nanoid } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
    name : 'todo',
    initialState : {    // it takes the initial state
        todoS : []
    },
    reducers : {
        addTodo : (state, action)=>{
            const todo = {
                id : nanoid(),
                text : action.payload,
            }
            state.todoS.push(todo);

        },
        removeTodo : (state, action)=>{
            state.todoS = state.todoS.filter(
                (todo) => todo.id !== action.payload);
        }
    }
})

export const {addTodo, removeTodo} = toDoSlice.actions
export default toDoSlice.reducer