import { useContext } from "react";
// Tambien es importante importar nuestro contexto
import { TodoContext } from "../context/TodoContext";
// import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { Modal } from "./modal/Modal";
import { TodoForm } from "./todo_form/TodoForm";
import WelcomeSection from "./WelcomeSection";

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
    <section className="todo_section">
      <WelcomeSection />
      {/* <TodoCounter /> */}
      <section className="todo_content">
        <h3>Lista de Tareas</h3>
        <TodoSearch />

        <TodoList>
          {error && <p>Ha ocurrido un error...</p>}
          {loading && <p>Cargando los datos, por favor espera...</p>}
          {!loading && !searchedTodos.length && <p>¡Sin resultados, crea tu primer tarea!</p>}

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
        <CreateTodoButton setOpenModal={setOpenModal} />
      </section>

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </section>
  );
}

export { AppUI };
