import { useState, useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import "../../styles/todo_form.css"

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = useState("");

  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Nueva Tarea</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Describe los datos de tu nueva tarea..."
      />
      <div className="form_buttons">
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit">Añadir</button>
      </div>
    </form>
  );
}

export { TodoForm };
