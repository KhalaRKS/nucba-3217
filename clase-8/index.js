// Metodos de arrays!

// Lenght

let animales = ["perro", "gato", "tortuga"];
let masAnimales = ["perro", "gato", "tortuga"];
console.log("Lenght: ");
console.log(animales.length);

// indexOf("gato") pasamos un valor a buscar en el array

console.log("indexOf: ");
console.log(animales.indexOf("gato"));

// toString() convierte el array en un string, incluyendo las , (comas)

console.log("toString: ");
console.log(animales.toString());

// concat(Array) concatena ambos array y devuelve uno nuevo con el valor

console.log("concat: ");
console.log(animales.concat(masAnimales));

// push("caballo") agrega un elemento nuevo a la ultima posicion del array

console.log("push: ");
animales.push("caballo");
console.log(animales);

// pop() Elmina el ultimo valor en el array y lo retorna

console.log("pop: ");
animales.pop();
console.log(animales);

// unshift("caballo") agrega un elemento nuevo a la primera posicion del array

console.log("unshift: ");
animales.unshift("caballo");
console.log(animales);

// shift() Elmina el primer valor en el array y lo retorna

console.log("shift: ");
animales.shift();
animales.shift();
console.log(animales);

animales = animales.concat(animales);
// join Devuelve un string con los elementos del array csepara por el valor indicado en el parametro

console.log("join: ");
console.log(animales.join(" y "));

// reverse() invertir  el contenido del array

console.log("reverse: ");

console.log(animales.reverse());

// slice(1,3) realiza un corte desde las posiciones indicadas, sin incluir la ultima. retorna un nuevo array

console.log("slice: ");
console.log(animales.slice(1, 3));
console.log(animales.slice(2, -1));
console.log(animales.slice(3));

// forEach
console.log("for each");
animales.forEach((animal, index) => {
  console.log(`${animal} en posición ${index}`);
});

// map

console.log("map");
let animalesConEstadisticas = animales.map((animal, index) => {
  return {
    animal,
    dueño: index % 2 === 0,
  };
});

console.log(animalesConEstadisticas);

// filter - animales con dueño
console.log("filter: ");
let animalesConDueño = animalesConEstadisticas.filter((animal) => animal.dueño);

console.log(animalesConDueño);

// find

console.log("Find");
let gato = animales.find((animal) => animal == "gato");
console.log(gato);
// every

console.log("Every");
console.log(animales.every((animal) => animal == "tortuga"));

// some
console.log("Some");
console.log(animales.some((animal) => animal == "gato"));

// sort
let ventasDelDia = [
  22, 33, 12, 44, 52, 42, 36, 78, 89, 99, 0, 31, 35, 76, 89, 23,
];
console.log("Sort:");
console.log(animales.sort());
console.log(ventasDelDia.sort((a, b) => a - b));

// reducer
console.log("reduce");
let montoTotal = ventasDelDia.reduce((prev, current) => prev + current);
console.log(`El total vendido de hoy en dolares es $ ${montoTotal}`);
