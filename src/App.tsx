import { useState } from 'react';
import Modal from './components/Modal.tsx'
import './index.css';

function App() {
  // DONE: fix the state of these `todos`

  //id of tasks by timestamp
  const [todos, setTodos] = useState([
    { id: Date.now(), text: 'Do the dishes.' },
    { id: Date.now() + 1, text: 'Finish this project.' },
  ]);

  // DONE: make components needed for TODO
  const [inputItem, setInput] = useState('');

  //handles change of task text
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  //submission of task text
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputItem.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputItem,
      };
      setTodos([...todos, newTodo]);
      setInput('');
    }
  };

  //task deletion
  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  
  return (
    <div style={{ 
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Times New Roman',
      backgroundColor: 'rgb(247, 7, 7, 0.95)'
    }}>
      <center><h1>To Do</h1></center>
      
      <form
        style={{
          marginTop: '20px',
          display: 'flex',
        }}
        onSubmit={handleSubmit}
      >
        {/* DONE: lift input text into a state so you can
        handle it and add to `todos` array */}
        <input 
          value={inputItem}
          onChange={handleInputChange}
          style={{ 
            marginRight: '7px',
            border: '1px solid #555',
            borderRadius: '5px',
            padding: '5px',
            width: '600px',
            fontSize: '18px',
          }}
        />
        <button type='submit' 
          style={{
            fontSize: '18px',
            width: '200px',
            border: '1px solid #555',
            borderRadius: '5px',
            padding: '5px',
            fontFamily: 'Times New Roman',
          }}
        >
          Create Task
        </button>
      </form>


      {/* DONE: use `map` to render tasks from `todos` remember about `keys` prop! */}
      <ul style={{ listStyleType: 'none'}}>
        {todos.map((todo, index) => (
          <li key={`${todo.id}-${todos.length}`} style={{ 
            marginBottom: '5px', 
            fontSize: '20px', 
          }}>
            <input 
              type="checkbox" 
              onChange={() => handleDelete(todo.id)} 
              style={{ marginRight: '10px' }}
            />
            {todo.text}
          </li>
        ))}
      </ul>

      <Modal />
    </div>
  )
}

export default App
