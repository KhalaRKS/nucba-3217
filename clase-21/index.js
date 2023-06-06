// fetch("https://pokeapi.co/api/v2/pokemon/1")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     console.log(`Hola, mi nombre de pokemon es ${data.name}`);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => console.log("Termine!!"));

// Asnc Await

// const obtenerPokemones = async () => {}
// async function obtenerPokemones() {}
const obtenerPokemones = async (numeroPokemon) => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/aaaa");
    if (!response) return console.error("No se encontro el pokemon");
    const data = await response.json();
    console.log(data);
    // crearCard(data);

    console.log(`Hola, mi nombre de pokemon es ${data.name}`);
    console.log("Termine!!");
  } catch (error) {
    console.error(error);
  }
};
const crearCard = (pokemon) => {
  const $template = document.getElementById("template-pokemon").content;
  const $clone = $template.cloneNode(true);
  $clone.querySelector(".card-body-img").setAttribute("src", pokemon.img);
};

obtenerPokemones();
