import React from "react";
import { VscAdd } from "react-icons/vsc";

function CreateTodoButton(props) {
  const onClickButton = () => {
    // Con prevState obtenemos el estado anterior del componente y retornamos su negacion, es decir si era true, retornamos false y viceversa.
    props.setOpenModal((prevState) => !prevState);
  };

  return (
    <button className="btn_create" onClick={onClickButton}>
      <VscAdd />
    </button>
  );
}

export { CreateTodoButton };
