import React from "react";
import { TodoProvider } from "./context/TodoContext";
import { AppUI } from "./components/AppUI";

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
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
