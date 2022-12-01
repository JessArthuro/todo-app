import React from "react";
import { TodoCounter } from "./TodoCounter";

function WelcomeSection() {
  return (
    <section className="welcome_section">
      <h1>¡Bienvenido de nuevo, Arturo!</h1>
      <h2>Listado de Tareas</h2>
      <TodoCounter />
    </section>
  );
}

export default WelcomeSection;
