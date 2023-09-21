import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: [{id: 1, text: "hello World"}]
}

export const todoSlice = createSlice({
    name:"todo",
    // initialState : initialState ,
    initialState,
    reducers: {
        addTodo: () => {},
        removeTodo: () => {},
        
    }
})