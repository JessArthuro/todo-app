import React from "react";
import * as moment from "moment";
import "moment/locale/es-mx";

function DayItem({ name, number }) {
  return (
    <article className="day_item">
      <span className="day_name">{moment().add(name, "days").format("ddd")}</span>
      <h3 className="day_number">{moment().add(number, "days").format("D")}</h3>
    </article>
  );
}

export default DayItem;
