import React from "react";
import { MdDelete, MdCheck } from "react-icons/md";

function TodoItem(props) {
  return (
    <li className={`todo_item ${props.completed && "todo_completed"}`}>
      <button className="btn_delete" onClick={props.onDelete}>
        <MdDelete />
      </button>

      <p>{props.text}</p>

      <button className="btn_complete" onClick={props.onComplete}>
        <MdCheck />
      </button>
    </li>
  );
}

export { TodoItem };
