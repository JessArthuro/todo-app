import React from "react";

function CreateTodoButton(props) {
  const onClickButton = () => {
    // Con prevState obtenemos el estado anterior del componente y retornamos su negacion, es decir si era true, retornamos false y viceversa.
    props.setOpenModal(prevState => !prevState); 
  };

  // declaramos una arrow function para que react ejecute esta funcion unicamente cuando se haga click en el boton, sino se declara la funcion se ejecutaria sola sin tener que hacer click.
  return <button onClick={onClickButton}>+</button>;
}

export { CreateTodoButton };
