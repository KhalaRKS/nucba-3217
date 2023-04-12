// const generarFuncion = () => {
//   let contador = 1;
//   const mostrarNombre = () => {
//     return console.log(contador++);
//   };
//   return mostrarNombre;
// };

// const nuevaFuncion = generarFuncion();

// /*
// nuevaFuncion = () => log(contador++)

// */

// for (let index = 0; index < 10; index++) {
//   nuevaFuncion();
// }

// nuevaFuncion();

// const multiplicador = (multi) => {
//   const multiPor = (valor) => multi * valor;
//   return multiPor;
// };

// const multiplicaPorDos = multiplicador(2);

// console.log(multiplicaPorDos(10));
// console.log(multiplicaPorDos(20));

// let key = prompt("Elija un valor a mostrar"); // nombre

let persona = {
  nombre: "Juan",
  edad: 33,
  esCasado: false,
  presentarse: function () {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} edad.`);
  },
};
// console.log(persona.presentarse());

// let array = [];
// let array2 = Array();
// let array3 = new Array();

console.log("Obtener las posiciones de un objeto como si fueran un array");
console.log(Object.entries(persona));
console.log("Obtener los valores de cada propiedad del objeto en un array");
console.log(Object.values(persona));
console.log("Obtener las keys de un objeto en un array");
console.log(Object.keys(persona));

// let personaCompleta = {
//   nombre: "Juan",
//   edad: 33,
//   esCasado: false,
//   cursos: ["Desarrollo web", "Ux/Ui"],
//   notas: {
//     diseño: 5,
//     desarrollo: 8,
//   },
// };

// console.log(personaCompleta.notas.desarrollo);
// // personaCompleta.cursos.forEach((element) => console.log(element));

// class Persona {
//
//   constructor(nombre, apellido) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//   }
//   mostrarNombre() {
//     console.log(this.nombre);
//   }
// }

// let pepe = new Persona("Jose", "Gutierrez");
// let alba = new Persona("Albano", "Kainer");

// const miFuncion = (a, b, ...valoresRestantes) => {
//   return a + b + (valoresRestantes[0] != undefined ? valoresRestantes[0] : 0);
// };

// console.log(miFuncion(1, 2, 4, 5, 6));
// console.log(miFuncion(1, 2));

const array = [1, 2, 3, 4, 5];

const [primerElemento, segundoElemento, ...rest] = array;

console.log(primerElemento, segundoElemento, rest);

let user = {
  id: 42,
  verificado: true,
};

let { id, verificado } = user;

console.log(id, verificado);
