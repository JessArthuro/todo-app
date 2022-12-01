import React from "react";
import { TodoCounter } from "./TodoCounter";
import * as moment from "moment";
import "moment/locale/es-mx";
import DayItem from "./DayItem";

function WelcomeSection() {
  return (
    <section className="welcome_section">
      <h1>¡Bienvenido de nuevo, Arturo!</h1>
      <h2>Calendario</h2>

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

      {/* <p>{moment().format("Do")}</p>
      <p>{moment().add(1, "days").format("Do")}</p>
      <p>{moment().add(2, "days").format("Do")}</p>
      <p>{moment().format("MMMM")}</p> */}
      <TodoCounter />
    </section>
  );
}

export default WelcomeSection;
