let numero = 10;

function saludar(nombre = "") {
  console.log("hola" + nombre);
}
// 1000ms = 1s
// 2000ms = 2s

// setTimeout(saludar, 2000);

// setInterval(() => saludar("pepe"), 2000);

// console.log(numero);
// console.log(numero);
// console.log(numero);
// console.log(numero);
// console.log(numero);

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let numeroAletorio = Math.random();
//     if (numeroAletorio > 0.5) {
//       resolve(numeroAletorio);
//     } else {
//       reject(new Error("Todo mal, el numero fue: " + numeroAletorio));
//     }
//   }, 2000);
// });

// promise
//   .then((response) => {
//     console.log("then");
//     console.log("Felicitaciones, ganaste la loteria con el numero" + response);
//     if (response < 0.8) {
//       saludar("pepe");
//     }
//     return response;
//   })
//   .then((response) => {
//     console.log("then 2");
//     console.log("Felicitaciones, ganaste la loteria con el numero" + response);
//   })
//   .catch((error) => {
//     console.log("catch");
//     console.log(
//       "No lograste acertar a la loteria, segui intentando! El numero fue: " +
//         error.message
//     );
//   })
//   .finally(() => {
//     console.log("finalizo");
//   });

// fetch("https://www.-s-s-s.com/users")
//   .then((response) => {
//     console.log(response.json());
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });
