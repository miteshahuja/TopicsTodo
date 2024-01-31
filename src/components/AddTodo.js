import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault ()
        dispatch(addTodo(input))
        setInput('')
    }

    return (
       <form onSubmit={addTodoHandler} className='space-x-12 mt-12 flex justify-content'>
        <input 
            type='text'
            className='border-1 max-w-96 flex-1 bg-slate-50 p-1'
            placeholder='Enter topic name to be studied...'
            value={input}
            onChange={ (e) => setInput(e.target.value)}
            />

        <button
            type="submit"
            className='text-white bg-green-500 border-0 py-1 px-4 focus:outline-none flex-row-reverse rounded-lg'
            disabled={!input.length > 0}
        >
            Add New Topic
        </button>
       </form>
    )
}

export default AddTodo