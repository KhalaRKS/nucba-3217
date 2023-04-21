let obj = {
  nombre: "pepe",
  dni: 3322,
};

let { nombre, dni } = obj;

function suma({ num1, num2 }) {
  return num1 + num2;
}
suma({ num2: 20 });

// Esta función se va a encargar de crear un auto.
// const createCar = () => {
//   return {
//     cantidadDeRuedas: prompt("Indique cuantas ruedas tendra el vehiculo."),
//     cantidadDePuertas: prompt("Indique cuantas puertas tendra el vehiculo."),
//     color: prompt("Indique el color del vehiculo"),
//     vidriosPolarizados: prompt("Indique si tendra vidrio polarizado."),
//     modelo: prompt("Indique el modelo."),
//     marca: prompt("Indique la marca."),
//     anio: prompt("Indique el año del vehiculo."),
//   };
// };

// for (let index = 0; index < 3; index++) {
//   alert(`Usted esta creando el vehiculo numero ${index + 1}`);
//   cars.push(createCar());
// }
let cars = [
  {
    cantidadDeRuedas: 4,
    cantidadDePuertas: 5,
    color: "rojo",
    vidriosPolarizados: true,
    modelo: "Fiesta",
    marca: "Ford",
    anio: 2007,
  },
  {
    cantidadDeRuedas: 3,
    cantidadDePuertas: 3,
    color: "Azul",
    vidriosPolarizados: false,
    modelo: "Focus",
    marca: "Ford",
    anio: 2022,
  },
  {
    cantidadDeRuedas: 4,
    cantidadDePuertas: 5,
    color: "verde",
    vidriosPolarizados: false,
    modelo: "Corsa",
    marca: "Chevrolet",
    anio: 2009,
  },
  {
    cantidadDeRuedas: 4,
    cantidadDePuertas: 2,
    color: "rojo",
    vidriosPolarizados: true,
    modelo: "Caballito",
    marca: "Ferrari",
    anio: 2023,
  },
];

let ventas = [23, 22, 1, 23, 4, 5, 678];

console.log("Estos son los vehiculos mas antiguos: ");
cars.forEach((car) => (car.anio < 2022 ? console.log(car) : null));

// Ordenamiento burbujeo
cars.sort((currentCar, nextCar) => currentCar.anio - nextCar.anio);

let autosConVidriosRotos = cars.filter(
  (car) => car.vidriosPolarizados == undefined
);
let autosConVidriosPolarizados2 = cars.map((car) => {
  if (car.vidriosPolarizados == false) return;
  return car;
});
ventas.reduce((prev, current) => prev + current);
console.log(ventas.reduce((prev, current) => prev + current));
console.log(ventas.includes(23));
ventas.indexOf(23);
console.log(ventas.join(" - "));
let ultimoElemento = ventas.pop();
ventas.push(66); // a la ultima posicion del array
let primerElemento = ventas.shift();
ventas.unshift(1); // a la primera posicion
ventas.sort((a, b) => a - b);
console.log(ventas);
console.log(ventas.some((venta) => venta > 50));
console.log(ventas.every((venta) => venta > 0));
// for (let index = 0; index < cars.length; index++) {
//   let car = cars[index];
//   // let car2 = cars[index + 1];
//   car.anio < 2022 ? console.log(car) : null;
// }

// const getUser = (userId) => {
//   console.log("Usuario obtenido");
// };

// function getUser2(userId) {
//   console.log("Usuario obtenido");
// }
