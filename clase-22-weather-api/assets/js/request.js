// Api key de clima
const key = "ec7b2b7a7d48f2c3dba577c98929e34d";
const baseURL = "https://api.openweathermap.org/data/2.5/weather";

// Funcion para obtener el clima
const requestCity = async (city) => {
  const query = `?q=${city}&units=metric&lang=es&appid=${key}`;
  // Hacer fetch a la api
  const response = await fetch(baseURL + query);
  // Convertir la respuesta en json
  const data = await response.json();
  return data;
};
