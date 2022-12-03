import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

// Al crear el contexto tambien podemos pasarle un valor inicial entre los parentesis
const TodoContext = createContext();

function TodoProvider(props) {
  // ** Nos traemos todo el estado y las funciones de nuestra aplicacion que queremos globales...
  // Uso del customHook para usar la persistencia de datos con localStorage
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  // Se renombran los elementos poniendo dos puntos al comienzo

  // Estado inicial del buscador de TODOs
  const [searchValue, setSearchValue] = useState("");

  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  // Variable esperando cambios por parte del componente TodoSearch
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    // Si la longitud del estado searchValue no es mayor a 1, quiere decir que el usuario no ha escrito nada, por lo tanto debemos mostrar todos los TODOs
    searchedTodos = todos;
  } else {
    // Declaramos los parametros necesarios para realizar el filtro de busqueda
    searchedTodos = todos.filter((todo) => {
      // Convertimos el texto de cada TODO en minusculas.
      const todoText = todo.text.toLowerCase();
      // Obtenemos el valor del buscador y tambien se convierte a minisculas
      const searchText = searchValue.toLowerCase();

      // Retornamos solo los valores del array de TODOs que incluyan el texto de la busqueda
      return todoText.includes(searchText);
    });
  }

  const addTodo = (text) => {
    // Validacion para comprobar que el valor no venga vacio.
    if (text.trim()) {
      const newTodos = [...todos];
      newTodos.unshift({
        completed: false,
        text,
      });
      saveTodos(newTodos);
    }
  };

  // La funcion recibe el texto del TODO como el identificador de cada uno
  const completeTodo = (text) => {
    // El metodo findIndex() devuelve el indice del primer elemento de un array que cumpla con la igualacion
    // const todoIndex = todos.findIndex((todo) => todo.text === text);
    // const newTodos = [...todos];
    // // Del nuevo array obtenemos el TODO que coincide con la igualacion y lo marcamos como completado
    // newTodos[todoIndex].completed = true;
    // // Mandamos a actualizar nuestro estado para volver a renderizar la aplicacion.
    // saveTodos(newTodos);

    const todoChecked = todos.map((todo) => {
      if (todo.text === text) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    saveTodos(todoChecked);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    // Con el metodo splice() eliminamos el primer elemento que coincida con la condicional de igualacion
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  // Retornamos nuestro proveedor con nuestro contexto en la etiqueta value, que recibira a toda nuestra aplicacion, por eso necesitamos la prop children
  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        addTodo,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

// Exportamos nuestro proveedor y nuestro contexto, en el context tambien esta el consumer, para acceder a nuestro contexto
export { TodoContext, TodoProvider };
