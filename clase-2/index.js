//HOISTING VA A ELEVAR LAD ECLARACION DE VARIABLES Y FUNCIONES AL MAXIMO NIVEL QUE PUEDA EJ: LINEA 1 DEL CODIGO
// var nombre2 = "pepe";
// var nombre2 = 'pepe'
// let nombre;

// 1 ) Te permite re-declarar una funcion con el mismo nombre sin decir nada
// 2 ) Las saca de su contexto local, por ende siempre son globales

nombre = "gerardo";

// let nombre = 'pepe'

// if (true) {
//   let nombre = "pepe";
//   nombre = "juan";
//   const apellido = "pepe";
//   apellido = "pepito";
// }

// constastes en mayus y snake case
const APELLIDO_DE_ALUMNO = "gomez";

var nombreDeAlumno = "gerardo";

// operadores logicos

let num1 = 2;
let num2 = 4;

num1 == num2;

// suma y asigna de 1
num1++;

num1 += 10;

num1 = num1 * 2;
num1 *= 2;

num1 %= 2;
num1 = num1 % 2;

// Operadores lgoicos AND OR NOT

num1 > 0 && num2 > 0; // true

num1 > 0 || num2 < 0; // true

num1 < 0 || num2 == 8; // false

!(num1 < 0); // true

console.log(num1);

if (num1 == 0) {
  let numeroLet = 4;
  var numeroVar = 22;
  console.log("num1 es igual a 0");
} else {
  console.log("No son iguales");
}

if (10 == 10) {
} else if (10 == 8) {
} else if (10 == 10) {
} else {
}

if (10 == 10) {
}
if (10 == 5) {
}
if (10 == 10) {
} else {
}

switch (10) {
  case 5:
    break;
  case 4:
    break;

  default:
    break;
}

let edad = 18 % 3 == 1 ? "Hola pepe" : "Hola Juan";

console.log(edad);

edad > 20
  ? console.log("Eres mayor de 20 años")
  : console.log("Eres menor de 20 años");

if (edad > 20) {
  console.log("Eres mayor de 20 años");
} else {
  console.log("Eres menor de 20 años");
}

edad > 20
  ? console.log("Eres mayor de 20 años")
  : edad < 20
  ? console.log("Eres menor de 20 años")
  : console.log("Tenes 20 años");

if (edad > 20) {
  console.log("Eres mayor de 20 años");
} else if (edad < 20) {
  console.log("Eres menor de 20 años");
} else {
  console.log("tenes 20");
}
