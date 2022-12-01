import React from "react";

function TodoList(props) {
  return (
    <section>
      <ul className="todo_list">{props.children}</ul>
    </section>
  );
}

export { TodoList };
