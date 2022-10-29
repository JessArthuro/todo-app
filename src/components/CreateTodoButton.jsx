import React from "react";

function CreateTodoButton(props) {
  const onClickButton = (msg) => {
    alert(msg);
  };

  // declaramos una arrow function para que react ejecute esta funcion unicamente cuando se haga click en el boton, sino se declara la funcion se ejecutaria sola sin tener que hacer click.
  return <button onClick={() => onClickButton('aqui se va abrir un modal')}>+</button>;
}

export default CreateTodoButton;
