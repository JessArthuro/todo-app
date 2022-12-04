import React from "react";
import { MdDelete, MdCheck } from "react-icons/md";
import "../styles/todo_item.css";

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className={`todo_item ${completed && "todo_completed"}`}>
      <p>{text}</p>

      <div className="buttons">
        <button className="btn_complete" onClick={onComplete}>
          <MdCheck className="icon_check" />
        </button>

        {completed && (
          <button className="btn_delete" onClick={onDelete}>
            <MdDelete />
          </button>
        )}
      </div>
    </li>
  );
}

export { TodoItem };
