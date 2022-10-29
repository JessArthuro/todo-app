import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoCounter() {
  // El hook useContext() nos ayuda a acceder a datos globales de nuestro contexto, desde cualquier componente hijo, sin tener que pasar estos datos por props componente por componente
  const { totalTodos, completedTodos } = useContext(TodoContext);

  return (
    <h1 className="todo_counter">
      Has completado {completedTodos} de {totalTodos} TODOs
    </h1>
  );
}

export { TodoCounter };