import { useContext } from "react";
// Tambien es importante importar nuestro contexto
import { TodoContext } from "../context/TodoContext";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { Modal } from "./modal/Modal";
import { TodoForm } from "./todo_form/TodoForm";

function AppUI() {
  // Desestructuramos los valores de nuestro contexto
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <div className="todo_content">
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Ha ocurrido un error...</p>}
        {loading && <p>Cargando los datos, por favor espera...</p>}
        {!loading && !searchedTodos.length && <p>¡Crea tu primer TODO!</p>}

        {searchedTodos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            completed={todo.completed}
            // la popiedad onComplete llama a la funcion completeTodo enviandole el texto de ese TODO
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </div>
  );
}

export { AppUI };
