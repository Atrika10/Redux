import {configureStore} from "@reduxjs/toolkit";
import  toDoReducer from '../slices/todo'

const store = configureStore({
    reducer : toDoReducer,
});

// const store = configureStore({
//     reducer : {
//         todo : toDoReducer
//     },
// });

export default store;