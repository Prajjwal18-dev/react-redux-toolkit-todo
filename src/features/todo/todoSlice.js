import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,      // Every slice has a initial State.This data goes to reducers
    reducers: {         // it has properties and functions
        addTodo:(state,action) =>{  // state: state gives data of initialState ,
                                    // actions: give values to perform a task
            const todo = {
                id: nanoid(),
                text: action.payload       // payload is a objects brought by action*  
            }
            todo.text.length === 0 ? alert("write a todo") : state.todos.push(todo);
                     // push todo to the states if its not empty
        },
        removeTodo:(state,action) =>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
            // returns true values
        } 
        // updateTodo:(state,action)=>{
        //     state.todos = state.todos.map((todo)=> todo.id===action.payload 
        //     ? {id: todo.id, text:action.payload } 
        //     : todo
        //     )
        // }
    }      
})

export const {addTodo,removeTodo} = todoSlice.actions 
//exporting functions seperately for individual use

export default todoSlice.reducer