import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id:1, text:'topic 1', completed:false}],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false

            }
            console.log('state add', state)
            console.log('action add', action)
            state.todos.push(todo)
         },

        removeTodo: (state, action) => {
            console.log('state', state)
            console.log('action', action)

            state.todos = state.todos.filter((todo) => 
                todo.id !== action.payload)
        } 
    }
})

export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;