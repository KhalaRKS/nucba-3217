// // crear el elemento card
// const CARD = document.createElement("div");
// CARD.classList.add("card");

// // crear imagen de la card
// const CARD_IMG = document.createElement("img");
// CARD_IMG.src = "https://via.placeholder.com/150";
// CARD_IMG.classList.add("card-img");

// const CARD_TITLE = document.createElement("h3");
// CARD_TITLE.classList.add("card-title");
// CARD_TITLE.innerText = "Titulo de la tarjeta";

// const CARD_BODY = document.createElement("div");
// CARD_BODY.classList.add("card-body");
// CARD_BODY.innerText = "Contenido de la tarjeta";

// const CARD_BUTTON = document.createElement("button");
// CARD_BUTTON.classList.add("card-button");
// CARD_BUTTON.innerText = "Comparar";

// CARD.appendChild(CARD_IMG);
// CARD.appendChild(CARD_TITLE);
// CARD.appendChild(CARD_BODY);
// CARD.appendChild(CARD_BUTTON);

// document.body.appendChild(CARD);
// console.log(CARD);

// const PARRAFO = document.querySelector(".parrafo");

// PARRAFO.innerHTML = "Este es el nuevo contenido del parrafo";

// const contenidoParrafo = PARRAFO.innerHTML;

// console.log(contenidoParrafo);

// const CAJA = document.querySelector(".caja");

// // innerHTML + template string

// const TITULO = "Titulo de la caja";
// const ANIMALES = ["perro", "gato", "pez", "tortuga"];

// CAJA.innerHTML = `
// <h2>${TITULO}</h2>
// <p>LOREM IPSUM</p>
// ${ANIMALES.map((animal) => `<p>${animal}</p>`).join("")}
// <button class="card-button">Click</button>
// `;

const CONTENEDOR_GENERADORA = document.querySelector(".fn-generadora");

// const CARD_INFO = {
//   title: "Card Title",
//   description: "Card description",
//   image: "https://picsum.photos/250/200",
// };

// const createCardTemplate = (card) => {
//   const { title, description, image } = card;
//   // const title = card.title
//   return `
//   <div class="card">
//     <img src="${image}" class="card-img" alt="${title}" />
//     <h3 class="card-title">${title}</h3>
//     <p>${description}</p>
//   </div>
//   `;
// };

// CONTENEDOR_GENERADORA.innerHTML = createCardTemplate(CARD_INFO);

// const ANIMALES_INFO = [
//   {
//     name: "perro",
//     description: "Card description",
//   },
//   {
//     name: "gato",
//     description: "Card description",
//   },
//   {
//     name: "pez",
//     description: "Card description",
//   },
// ];

// const createCardTemplate = (card) => {
//   const { name, description } = card;
//   // const name = card.title
//   return `
//   <div class="card">
//     <h3 class="card-title">${name}</h3>
//     <p>${description}</p>
//   </div>
//   `;
// };

// const cardTemplate = ANIMALES_INFO.map(createCardTemplate).join("");

// CONTENEDOR_GENERADORA.innerHTML += cardTemplate;

const user = {
  name: "pepe",
  age: 18,
};

// convertir a json

let json = JSON.stringify(user);
console.log(json);

// convertir a Javascript Object
let jsonParse = JSON.parse(json);
console.log(jsonParse);

// console.log(user);

// localStorage y sessionStorage

// localStorage persiste la data todo el tiempo que queramos o hasta que la elimine el usuario o nosotros la eliminemos (Nunca expira)

// sessionStorage guarda la informacion de esa pestaña, hasta que esa pestaña se cierre.

// sinonimos
localStorage.setItem("name", "pepe");
localStorage.apellido = "pepito";

localStorage.setItem("json", json);

// sinonimos
sessionStorage.setItem("name", "pepe");
sessionStorage.apellido = "pepito";

let nameLocal = localStorage.getItem("name");

let nameEnSesionStorage = sessionStorage.getItem("name");

console.log(nameLocal);
