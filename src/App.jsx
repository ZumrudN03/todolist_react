import React, { useState } from "react";
import Todo from './Components/Todolist';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message !== '') {
      setTodoList([...todoList, message]);
      setMessage("");
    }
  };

  const handleDelete = (index) => {
    const newTodoList = todoList.filter((x, idx) => idx !== index);
    setTodoList(newTodoList);
  };

  return (
    <div className="todo">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => setMessage(event.target.value)}
          value={message}
        />
        <button type="submit">Submit</button>
      </form>
      <Todo messages={todoList} onDelete={handleDelete} />
    </div>
  );
}

export default App;