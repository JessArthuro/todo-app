import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  // Funcion para escuchar los cambios que ocurran en el input search
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      type="search"
      placeholder="Buscar Tarea..."
      value={searchValue}
      onChange={onSearchValueChange}
      className="input_search"
    />
  );
}

export { TodoSearch };
