import React, { useState } from "react";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import CreateTodoButton from "./components/CreateTodoButton";
import useLocalStorage from "./custom_hooks/useLocalStorage";

// const listTodos = [
//   {
//     text: "aprender react",
//     completed: false,
//   },
//   {
//     text: "aprender javascript",
//     completed: false,
//   },
//   {
//     text: "aprender tailwind",
//     completed: false,
//   },
//   {
//     text: "aprender react-router",
//     completed: true,
//   },
//   {
//     text: "aprender styled-components",
//     completed: true,
//   },
// ];

function App() {
  // Uso del customHook para usar la persistencia de datos con localStorage
  const { item: todos, saveItem: saveTodos, loading, error} = useLocalStorage("TODOS_V1", []);
  // Se renombran los elementos poniendo dos puntos al comienzo

  // Estado inicial del buscador de TODOs
  const [searchValue, setSearchValue] = useState("");

  // Funcion para filtrar la cantidad de TODOs completados
  const completedTodos = todos.filter((todo) => todo.completed).length;
  // Funcion para mostrar la cantidad total de TODOs existentes
  const totalTodos = todos.length;

  // Variable que contiene un array vacio esperando cambios por parte del componente TodoSearch
  let searchedTodos = [];

  // filtrar todos los TODOs para que aparezcan dependiendo de lo que escriban en el componente TodoSearch
  if (!searchValue.length >= 1) {
    // cuando el usuario no escriba nada vamos a mostrar todos los TODOs
    searchedTodos = todos;
  } else {
    // usamos el metodo filter para filtrar el contenido de acuerdo a los parametros que declaremos
    searchedTodos = todos.filter((todo) => {
      // la constante va devolver el valor de la cadena pero convertida en minusculas.
      const todoText = todo.text.toLowerCase();
      // la constante va devolver el valor del buscador y lo va convertir tambien en minisculas
      const searchText = searchValue.toLowerCase();

      // retornamos solo los valores que puedan ser encontrados con la constante todoText
      return todoText.includes(searchText);
    });
  }

  // Funcion que va recibir el identificador de cada TODO que en este caso es el texto escrito.
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    // Creamos una nueva lista de TODOs
    const newTodos = [...todos];
    // marcamos a ese TODo que cumple con las condiciones que le estamos indicando, cambiamos la propiedad compplete como true
    newTodos[todoIndex].completed = true;
    // mandamos a actualizar nuestro estado para volver a renderizar la aplicacion.
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <div className="todo_content">
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>

        {error && <p>Ha ocurrido un error...</p>}
        {loading && <p>Cargando los datos, por favor espera...</p>}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}

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

      <CreateTodoButton />
    </div>
  );
}

export default App;
