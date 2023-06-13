const pokemonsContainer = document.querySelector("#caja");
const loader = document.querySelector(".pokeballs-container");

// Objeto state para controlar el estado de la app

const appState = {
  currentURL: "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0",
  isFetching: false,
};

// Funcion para hacer el llamado a la api y retornar la data necesaria para empezar la app

const pokemonTemplate = (pokemon) => {
  return {
    id: pokemon.id,
    name: pokemon.name.toUpperCase(),
    image: pokemon.sprites.other.home.front_default,
    height: pokemon.height / 10,
    weight: pokemon.weight / 10,
    types: pokemon.types,
    experience: pokemon.base_experience,
  };
};

// funcion para pintar los tipos del pokemon en la card del pokemon

const createTypeCards = (types) => {
  return types
    .map((tipo) => {
      return `<span class="${tipo.type.name} poke__type">${tipo.type.name}</span>`;
    })
    .join("");
};
// funcion para pintar los pokemons en el DOM
const createPokemonCard = (pokemon) => {
  const { id, name, image, height, weight, types, experience } =
    pokemonTemplate(pokemon);

  return `
        <div class="poke">
            <img  src="${image}"/>
            <h2>${name}</h2>
            <span class="exp">EXP: ${experience}</span>
            <div class="tipo-poke">
                ${createTypeCards(types)}
            </div>
            <p class="id-poke">#${id}</p>
            <p class="height">Height: ${height}m</p>
            <p class="weight">Weight: ${weight}Kg</p>
        </div>`;
};

// funcion para renderizar la lista de pokemones en el DOM
const renderPokemonsList = (pokemonList) => {
  pokemonsContainer.innerHTML += pokemonList
    .map((pokemon) => {
      return createPokemonCard(pokemon);
    })
    .join("");
};

// funcion para mostrar el loader y renderizar la lista de pokemones pasado un determinado tiempo

const renderOnScroll = (pokemonList) => {
  loader.classList.add("show");
  setTimeout(() => {
    loader.classList.remove("show");
    renderPokemonsList(pokemonList);
    appState.isFetching = false;
  }, 1000);
};

// Función para traese la data de los siguientes 8 pokemones a renderizar

const getPokemondsData = async () => {
  const { next, results } = await fetchPokemons(appState.currentURL);
  appState.currentURL = next;

  const pokemonDataUrls = results.map((pokemon) => pokemon.url);
  const pokemonsData = await Promise.all(
    pokemonDataUrls.map(async (url) => {
      const nextPokemonsData = await fetch(url);
      return await nextPokemonsData.json();
    })
  );

  return pokemonsData;
};

// Función para obtener la data de los pokemones a renderizar y renderizarlos en base a la función que se pase como parametro

const loadAndRenderPokemons = async (renderFunction) => {
  const pokemonsData = await getPokemondsData();
  renderFunction(pokemonsData);
};

// Función para verificar si el scroll llego al final de la pagina

const isEndOfPage = () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  const bottom = scrollTop + clientHeight >= scrollHeight - 10;
  return bottom;
};

// Función para verificar si el scroll esta en el final de la pagina y si no se esta haciendo una llamada a la API

const loadNextPokemons = async () => {
  if (isEndOfPage() && !appState.isFetching) {
    appState.isFetching = true;
    loadAndRenderPokemons(renderOnScroll);
  }
};

// Función init para inicializar la app.
const init = () => {
  window.addEventListener(
    "DOMContentLoaded",
    async () => await loadAndRenderPokemons(renderPokemonsList)
  );
  window.addEventListener("scroll", async () => {
    await loadNextPokemons();
  });
};

init();
