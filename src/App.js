// App.js
import React, { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import "./index.css"; // 追加

function App() {
  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef();

  const handleaddTodo = () => {
    const name = todoNameRef.current.value;
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), name: name, completed: false },
    ]);
    todoNameRef.current.value = "";
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleClear = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  return (
    <div className="container">
      <h1>Todoリスト</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef} className="todo-input" />
      <button onClick={handleaddTodo} className="todo-button">
        タスクを追加
      </button>
      <button onClick={handleClear} className="todo-button">
        完了したタスクの削除
      </button>
      <div>残りのタスク: {todos.filter((todo) => !todo.completed).length}</div>
    </div>
  );
}

export default App;
