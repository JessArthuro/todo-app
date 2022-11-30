import React from "react";
import "./todoitem.css";
import { MdCheckCircle, MdDelete } from "react-icons/md";

function TodoItem(props) {
  return (
    <li className={`todo_item ${props.completed && 'todo_completed'}`}>
      <button onClick={props.onComplete}><MdCheckCircle /></button>
      <p>{props.text}</p>
      <button onClick={props.onDelete}><MdDelete /></button>
    </li>
  );
}

export { TodoItem };
