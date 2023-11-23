import React from "react";

function Todo({ messages, onDelete }) {
  return (
    <div>
      <ul>
        {messages.map((x, index) => (
          <li key={index}>
            {x} 
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;