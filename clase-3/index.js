// for (let index = 1; index <= 10; index++) {
//   if (index == 5) {
//     console.log("Me voy del for porque el numero actual es: " + index);
//     break;
//     console.log("Hola estoy abajo del break");
//   }
//   console.log("Contando desde el numero: " + index);
// }

// for (let index = 1; index <= 10; index++) {
//   if (index == 5) {
//     console.log(
//       "Me salteo la instruccion del for porque el numero actual es: " + index
//     );
//     continue;
//     console.log("Hola estoy abajo del break");
//   }
//   console.log("Contando desde el numero: " + index);
// }

// let salir = true;

// if (salir) {
//   console.log(salir);
// }

// let i = 1;

// while (i < 10 && salir) {
//   if (i % 7 == 0) {
//     salir = false;
//   }
//   console.log(i);
//   i++;
// }

let i = 11;

// console.log("ESTO ES DO WHILE");
do {
  console.log(i);
  i++;
} while (i < 10);

i = 11;
// console.log("ESTO ES WHILE");
while (i < 10) {
  console.log(i);
  i++;
}

console.log("ARRAYS");
// Array vacio
let miArray = [];
// Array con valores mixtos
let miArray2 = [
  "hola",
  22,
  "hello",
  undefined,
  null,
  [0, 1, 2, 3],
  true,
  false,
];
//array con valor en posicion 1, pero con undefined en posicion 0
let miArray3 = [undefined, "hola"];
// array de numeros
let numeros = [66, 55, 44, 333, 22, 11, 0];

console.log(numeros[1] + numeros[4]);

for (let index = 0; index < miArray2.length; index++) {
  const element = miArray2[index];

  console.log("Array en la posicion: " + index + " - " + element);
}

for (let numero of numeros) {
  console.log("Este es el numero: " + numero);
}

for (const index in numeros) {
  const element = numeros[index];
  console.log("Este es el numero: " + element);
}
