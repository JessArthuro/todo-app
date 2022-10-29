import React from "react";

function TodoSearch({ searchValue, setSearchValue }) {
  // const [searchValue, setSearchValue] = useState("");

  // funcion para escuchar los cambios que ocurran en el input search
  const onSearchValueChange = (event) => {
    // console.log(event.target.value)

    setSearchValue(event.target.value);
  };

  return (
    <input
      type="search"
      placeholder="Buscar TODO"
      // el valor va ser el estado inicial del hook useState
      value={searchValue}
      // con el evento onChange va ejecutar la funcion declara en la parte superior
      onChange={onSearchValueChange}
      className="input_search"
    />
  );
}

export default TodoSearch;
