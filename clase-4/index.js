// funciones

// 1 ) Se declara con la palabra reservada function
// 2 ) Se escriben en minusculas y sin espacios
// 3 ) Alba es un crack
// 4 ) Empecemos

// function sumar() {
//   let numero1 = 3;
//   let numero2 = 4;

//   alert("La suma de ambos numeros es = " + (numero1 + numero2));
// }

// sumar();

// Valor predeterminado para el param nombre
// function saludar(nombre = "El pepe") {
//   console.log(`Hola ${nombre}`);
// }

// // saludar();

// // saludar("Messi");
// // saludar("De Paul");

// // Valor predeterminado para el parametro numero2
// function multiplicar(numero1, numero2 = 1) {
//   console.log(numero1 * numero2);
// }

// multiplicar(2, 3);
// multiplicar(4);

// function sumar(num1, num2) {
//   return num1 + num2;
// }

// function multiplicar(numero1, numero2 = 1) {
//   return numero1 * numero2;
// }

// sumar(5, 4);

// let numeroNuevo = sumar(5, 4);
// console.log(numeroNuevo);

// let nuevoMultiplicacion = multiplicar(sumar(2, 2), multiplicar(2, 2));
// console.log(multiplicar(sumar(2, 2), multiplicar(2, 2)));

// console.log(sumar(1, 2));

// function sumar(a, b) {
//   return a + b;
// }

// const sumar = (a) => {
//   return a * 5;
// };

// const multiplicar = (a, b) => a * b;

// console.log(multiplicar(5, 5));

// RECURSIVIDAD

// const factorial = (num) => {
//   if (num <= 1) return 1;
//   return num * factorial(num - 1);
// };

// 6 * 4;

// 3 * 2;
// 2 * 1;

// console.log(factorial(4));

// Callbacks

const alertHola = (nombre) => alert("Hola " + nombre);

const consoleHola = (nombre) => console.log(`Hola ${nombre}`);

const procesarEntrada = (callback) => {
  const nombre = prompt("Ingresa tu nombre champion :)");
  // alertHola(nombre)
  // puede tomar cualquiera de estos 2 valores en base a lo que le enviemos
  // consoleHola(nombre)
  callback(nombre);
};

procesarEntrada(alertHola);
procesarEntrada(consoleHola);
