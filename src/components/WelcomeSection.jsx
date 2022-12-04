import React from "react";
import * as moment from "moment";
import "moment/locale/es-mx";
import DayItem from "./DayItem";
import { TodoCounter } from "./TodoCounter";
import "../styles/welcome_section.css";

function WelcomeSection() {
  return (
    <section className="welcome_section">
      <h1>¡Bienvenido de nuevo, Arturo!</h1>
      <div className="headings_container">
        <h2>Calendario</h2>
        <span className="current_month">{moment().format("MMM")}</span>
      </div>

      <div className="days_container">
        <article className="day_item today">
          <span className="day_name">{moment().format("ddd")}</span>
          <h3 className="day_number">{moment().format("D")}</h3>
        </article>

        <DayItem name={1} number={1} />
        <DayItem name={2} number={2} />
        <DayItem name={3} number={3} />
        <DayItem name={4} number={4} />
      </div>
      <TodoCounter />
    </section>
  );
}

export { WelcomeSection };
