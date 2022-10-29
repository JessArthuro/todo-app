import React from "react";
import "./todoitem.css";

function TodoItem(props) {
  return (
    <li className={`todo_item ${props.completed && 'todo_completed'}`}>
      <span onClick={props.onComplete}>C</span>
      <p>{props.text}</p>
      <span onClick={props.onDelete}>X</span>
    </li>
  );
}

export { TodoItem };
