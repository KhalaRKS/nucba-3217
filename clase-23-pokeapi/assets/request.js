// Funcion para hacer el llamado a la api y retornar la data necesaria para empezar la app
const fetchPokemons = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
