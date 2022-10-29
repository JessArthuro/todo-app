import { useEffect, useState } from "react";

// Creacion de un customHook para manejar toda la logica de localStorage
function useLocalStorage(itemName, initialValue) {
  // El parametro itemName sera sustituido por el nombre que se le declare cuando se use. En este caso se llamo como TODOS_V1
  // El parametro initialValue establece el estado inicial de nuestros items, podria ser un array o algun string, etc. Eso se declara al momento de implementar el customHook

  const [error, setError] = useState(false);

  // Estado de carga
  const [loading, setLoading] = useState(true);

  const [item, setItem] = useState(initialValue);

  // Simulacion de una peticion a una API, se establece que la informacion la retorne despues de 2 segundos
  useEffect(() => {
    setTimeout(() => {
      // Envolvemos el bloque de instrucciones en un declaracion try y si llega ocurrir un error, lo mostramos en el bloque catch
      try {
        // ** Persistencia de datos con localStorage
        // Al elemento guardado en localStorage se le llamo como (itemName === TODOS_V1) y a la vez este valor se guardo en una constante.
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        // Condicional para verificar si localStorage aun no tiene TODOs registrados
        if (!localStorageItem) {
          // Accedemos al metodo setItem de localStorage para usar el metodo JSON.stringify y convertir los valores de javascript a una cadena JSON
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          // Se crea un array vacio por defecto y se almacena en la variable parsedItem
          parsedItem = initialValue;
        } else {
          // Si la variable parsedItem contiene TODOs creados, el metodo JSON.parse() covierte el string que obtenemos de localStorage a un objeto de javascript
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        // Cuando ya tengamos la informacion de la aplicacion y haya terminado el Timeout, el estado loading va cambiar a false.
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 2000);
  });

  // Funcion para obtener un nuevo array filtrando los TODOs completados o eliminados y convertirlos a una cadena JSON y poder almacenarlos en localStorage
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  // Retornamos el estado inicial del useState y tambien la funcion saveItem. Esto es lo que necesitan recibir nuestros componentes
  return { item, saveItem, loading, error };
}

export default useLocalStorage;
