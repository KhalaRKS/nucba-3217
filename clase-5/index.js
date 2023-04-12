// Callbacks

// const saludarConsola = (nombreASaludar) =>
//   console.log(`Hola ${nombreASaludar} por consola`);

// //
// const saludarAlerta = (nombreASaludar) =>
//   alert(`Hola ${nombreASaludar} por alerta!`);

// //Funcion que va a realizar el uso de callback
// const elegirSaludo = (ejecutarSaludoElegido) => {
//   const nombreDePersona = prompt("Ingrese su nombre");
//   ejecutarSaludoElegido(nombreDePersona);
// };

// // elegirSaludo(saludarConsola);

// const suma = (a, b) => a + b;

// let nombres = ["Gustavo", "Seba", "Valentina", "Victoria", "Gerardo", "Alba"];

// const nuevaFuncion = () => {};

// nombres.forEach((element) => {
//   console.log(`Hola ${element} por consola`);
// });

// // ===
// nombres.forEach(saludarConsola);

let nombre = "Pepe";

while (nombre != undefined) {
  let nombre = "Alba";
  console.log("Hola " + nombre);
  break;
}
console.log(nombre);

let numeros = [1, 2, 3, 4, 5, 6, 7, 22];

for (let index = 0; index < numeros.length; index++) {
  const element = numeros[index];
  console.log(element + 1);
}

let key = 0;

// 1 - verdadero - valor
// 0 - falso - vacio -

switch (key) {
  case 11:
    console.log(key + 1);
    break;
  case 22:
    console.log(key + 2);
    break;
  case 33:
    console.log(key + 3);
    break;
  case 44:
    console.log(key + 4);
    break;
  case 55:
    console.log(key + 5);
    break;
  case 66:
    console.log(key + 6);
    break;
  default:
    console.log(key + 0);
    break;
}
//
// verdero && verdaero
// if (!key && key != 0) console.log("El valor no existe");

let key2 = !!key;

!!key ? console.log("El valor existe") : console.log("El valor no existe");

const sustract = (a, b) => a - b;

const sustract3 = (a, b) => {
  return a - b;
};

const sustract2 = (a, b) => {
  // 2 - 4
  // -2
  a - b;
};

const executeFunction = (cb) => {
  let num1 = 2;
  let num2 = 4;
  console.log(cb(num1, num2));
};

executeFunction(sustract);

// recursividad
const executeFunction2 = (numero) => {
  console.log(numero);

  if (numero <= 0) return;
  executeFunction2(numero - 1);
};

executeFunction2(10);


