const BODY = document.querySelector("body");

const INPUT_TEXT = document.querySelector("#input-text");

const BUTTON_ENVIAR = document.getElementById("button-enviar");

const PARRAFO = document.getElementById("parrafo");

const TEXT_AREA = document.getElementById("text-area");

const CUADRADO_COLOR = document.getElementById("cuadrado-color");

const FORM = document.getElementById("form");

const DIV_PADRE = document.querySelector("#parent");
const DIV_HIJO = document.querySelector("#child");

const handleChange = () => {
  console.log("hola, mi valor cambio");
};
const handleClick = (event) => {
  console.log("event target");
  console.log(event.target);
};
const changeFontSize = () => {
  PARRAFO.classList.add("big");
};

INPUT_TEXT.addEventListener("change", handleChange);

// similares / sinonimos
BUTTON_ENVIAR.addEventListener("click", handleClick);
// BUTTON_ENVIAR.onclick = handleClick;

PARRAFO.addEventListener("mouseover", changeFontSize);

CUADRADO_COLOR.addEventListener("mouseover", () => {
  if (CUADRADO_COLOR.classList.contains("red")) {
    CUADRADO_COLOR.classList.remove("red");
    CUADRADO_COLOR.classList.add("amarillo");
  } else {
    CUADRADO_COLOR.classList.remove("amarillo");
    CUADRADO_COLOR.classList.add("red");
  }
});

FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Deberia verse esto por consola");
});

DIV_PADRE.addEventListener("click", () => {
  console.log("clickeaste al padre");
});
DIV_HIJO.addEventListener("click", (e) => {
  console.log("clickeaste al hijo");
  HIDDEN_TEXTO.classList.toggle("red");
  e.stopPropagation();
});
const HIDDEN_BUTTON = document.getElementById("hidden-button");
const HIDDEN_TEXTO = document.getElementById("texto-hidden");

HIDDEN_BUTTON.addEventListener("click", () => {
  HIDDEN_TEXTO.classList.toggle("hidden");
});

const IMG = document.getElementById("nucba-image");

IMG.addEventListener("click", (e) => {
  IMG.setAttribute(
    "src",
    "https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/Nucba_square/original.png?1635285095"
  );
  IMG.setAttribute("alt", "Iconito de nucba");
});
