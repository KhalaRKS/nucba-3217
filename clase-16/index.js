// class Pizza {
//   // Propiedades
//   id = 1;
//   sabor;
//   toppings;
//   tamanio;
//   constructor(sabor, toppings, tamanio) {
//     this.sabor = sabor;
//     this.toppings = toppings;
//     this.tamanio = tamanio;
//   }

//   // Métodos
//   hablar() {
//     return "Odio los lunes.";
//   }
// }
// let array = [
//   {
//     sabor: "muzzarella",
//     tamanio: "grande",
//     toppings: ["asd", "asd", "asd"],
//   },
//   {
//     sabor: "muzzarella",
//     tamanio: "grande",
//     toppings: ["asd", "asd", "asd"],
//   },
//   {
//     sabor: "muzzarella",
//     tamanio: "grande",
//     toppings: ["asd", "asd", "asd"],
//   },
//   {
//     sabor: "muzzarella",
//     tamanio: "grande",
//     toppings: ["asd", "asd", "asd"],
//   },
// ];

// let Pizzas = [
//   new Pizza(
//     "Muzzarella",
//     ["aceitunas", "Cebolla", "cuadraditos de panceta"],
//     "Grande"
//   ),
//   new Pizza(
//     "Muzzarella",
//     ["aceitunas", "Cebolla", "cuadraditos de panceta"],
//     "Grande"
//   ),
//   new Pizza(
//     "Muzzarella",
//     ["aceitunas", "Cebolla", "cuadraditos de panceta"],
//     "Grande"
//   ),
// ];

// let animal = {
//   name: "Garfield",
//   type: "Cat",
// };

// console.log(Pizzas);
// function asignarNombre(nombre, persona) {}
// asignarNombre("pepe", "Juansito");

//1) Manipulacion y Renderizado de DOM

const imagen = document.querySelector("img");
const tasksContainer = document.querySelector("#task-container");

console.log(imagen);

// Función generadora
let tarea = {
  name: "Lavar los platos",
  id: "asd123",
};

let mensajes = [
  "Hola como estas?",
  "Yo todo bien y vos?",
  "Aca, estudiando en nucba",
  "Ah que copado, que estas viendo?",
  "Javascript locura!",
];

const createMessage = (mensaje) => `<li>${mensaje}</li>`;

const renderMessageList = () => {
  tasksContainer.innerHTML = mensajes
    .map((mensaje) => createMessage(mensaje))
    .join("");
};
renderMessageList();

let li = document.createElement("li");

li.textContent = mensajes[0];

tasksContainer.appendChild(li);

//2) Eventos en elementos
const button = document.querySelector("#button-card");
const textCard = document.querySelector("#text-card");

let imagenes = ["wwww.imagen.com", "wwww.imagen2.com"];
let isChanged = false;

const cambiarImagenYTexto = (event) => {
  console.log(event);
  if (!isChanged) {
    imagen.setAttribute(
      "src",
      "https://images.ctfassets.net/t5yal6u1wvnw/6R3NODHEjSjCjICNoka6WL/35b689fa76c2d30d2e0e2de103b1bc44/Logo-Nucba.png"
    );
    textCard.textContent = "Gracias por suscribirte a nucba!";
    button.textContent = "Desuscribirme!";
  } else {
    imagen.setAttribute(
      "src",
      "https://media.licdn.com/dms/image/C4D0BAQF4se_4FDXJSQ/company-logo_200_200/0/1654568652710?e=2147483647&v=beta&t=_vVcvI48uck2TUdsqMknl46KC5KrYw5wCGTJwNyaxjo"
    );
    textCard.textContent = "Lorem ipsum dolor sit amet consectetur.";
    button.textContent = "Suscribirme!";
  }
  isChanged = !isChanged;
  return;
};

button.addEventListener("click", cambiarImagenYTexto);

//3) LocalStorage y SessionStorage

// sessionStorage.setItem("nombre", "Alba");

// let nombre = sessionStorage.getItem("nombre");

console.log(nombre);
