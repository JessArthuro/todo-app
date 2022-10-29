import React from "react";
import "./todoitem.css";

function TodoItem(props) {
  // funcion para marcar un todo completado
  // const onComplete = () => {
  //   alert("Has completado la tarea" + props.text);
  // };

  // funcion para eliminar un todo
  // const onDelete = () => {
  //   alert("Has eliminado la tarea" + props.text);
  // };

  return (
    <li className={`todo_item ${props.completed && 'todo_completed'}`}>
      <span onClick={props.onComplete}>C</span>
      <p>{props.text}</p>
      <span onClick={props.onDelete}>X</span>
    </li>
  );
}

export default TodoItem;
