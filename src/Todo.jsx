// Todo.jsx
import React from "react";
import "./index.css"; // 追加

const Todo = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          readOnly
          onChange={handleTodoClick}
          className="todo-checkbox"
        />
      </label>
      {todo.name}
    </div>
  );
};

export default Todo;
