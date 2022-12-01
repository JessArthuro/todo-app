import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  // const [searchValue, setSearchValue] = useState("");

  // Funcion para escuchar los cambios que ocurran en el input search
  const onSearchValueChange = (event) => {
    // console.log(event.target.value)
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
