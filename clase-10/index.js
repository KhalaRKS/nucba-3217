const TITULO_H1 = document.getElementById("titulo");
const CONTENEDORES = document.getElementsByClassName("contenedor");

const PARRAFO = document.querySelector("#parrafo");
// SIMILARES
const DIVS = document.getElementsByTagName("div");
const DIVS_QUERY_ALL = document.querySelectorAll("div");

setTimeout(() => {
  TITULO_H1.innerHTML = "Hola camada 3217!!";
}, 5000);

setTimeout(() => {
  PARRAFO.innerHTML = "Espero que esten disfrutando la clase numero 10";
}, 3000);

console.log("Por tag div: ", DIVS);
console.log("Por DIVS_QUERY_ALL: ", DIVS_QUERY_ALL);

// for (let index = 0; index < DIVS.length; index++) {
//   const element = DIVS[index];

//   if (index % 2 == 1) element.classList.add("red");

//   console.log(element);
// }

// Para que un objeto sea completamente constante:
// const obj = Object.freeze({
//   name: "admin",
//   edad: "admin",
// });
