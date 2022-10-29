import React from "react";

function TodoCounter({ total, completed }) {
  return <h1 className="todo_counter">Has completado {completed} de {total} TODOs</h1>;
}

export default TodoCounter;
