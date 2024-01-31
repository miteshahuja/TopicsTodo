import React from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <main className="max-w-xl mx-auto"> 
    <h1 className='text-2xl mt-5'>Welcome to Your Study Todo list</h1>

      <AddTodo/>
      <Todos/>
    </main>
  );
}

export default App;
