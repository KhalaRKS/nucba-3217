// fetch ("https://pokeapi.co/api/v2/pokemon")

// Pila de llamdas

// asincronismo

// codigo que no se obtiene un resultado/respuesta en el momento
// puede demorar un tiempo indeterminado

const getPokemons = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("ERROR");
    console.log(error);
  }
};
// const getPokemons2 = () => {
//   fetch("https://pokeapi.co/api/v2/pokemon")
//     .then((response) => {
//       console.log(response.json());
//     })
//     .then((data) => {
//       console.log(data.results);
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });
// };

// Promise
// Una promesa tiene 3 valores posibles o estados
// 1. pending (pendiente) -> cuando se ejecuta la promesa
// 2. fulfilled (cumplida) -> cuando la promesa se resuelve exitosamente
// 3. rejected (rechazada) -> cuando la promesa falla

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Se resolvio la promesa");
//   }, 2000);
//   setTimeout(() => {
//     reject("No se resolvio la promesa");
//   }, 1500);
// });

// promesa
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// sincronico
// codigo sincronico es codigo que se ejecuta en el momento, por ende, su resultado/respuesta suele ser inmediato
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }
// let pokemons = ["pikachu", "charmander", "bulbasaur"];
