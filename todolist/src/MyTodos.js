import React from "react";
import { useState } from "react";
import "./todos.css";

function MyTodos() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  const addTodoFun = () => {
    if (inputText.trim() !== "") {
        const newTodos = [...todos];
        console.log(todos);
        newTodos.push(inputText); 
        setTodos(newTodos); 
        setInputText(""); 
    } else {
      alert("Please Enter a text");
    }
  };

  const deleteTodoFun = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    console.log(todos);
  };

  return (
    <div className="todo-list">
      <div className="list-head">
        <input
          type="text"
          id="get_text"
          placeholder="Enter text"
          autoFocus
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button id="add_btn" onClick={addTodoFun}>
          Add
        </button>
      </div>

      <ul id="to-do-box">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <i
              id="delete"
              className="fa-solid fa-xmark"
              onClick={() => deleteTodoFun(index)}
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyTodos;
