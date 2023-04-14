// metodos de String
// replaceAll()
let variable = "HoLa mUnDo";

console.log(`${variable} tiene ${variable.length} caracteres`);

console.log(
  `Mayusculas: ${variable.toUpperCase()}, en minusculas ${variable.toLowerCase()}`
);
let variableEnMinusculas = variable.toLowerCase();
console.log(
  `En vez de hola, chau: ${variableEnMinusculas.replace("hola", "chau")}`
);
// Recuerden que el segundo valor numero del indexOf, es opcional, por ende el 0 no tiene sentido ponerlo.
console.log(
  `Buscar mundo a partir de la posicion 0: ${variableEnMinusculas.indexOf(
    "mundo",
    0
  )} `
);

let nombre = "                   Alba     ";

console.log(`Quitar espacios de String: ${nombre.trim()}`);

let parrafo =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus facere fugit voluptas. Quibusdam, in molestiae cum, magni necessitatibus veniam consequatur quis,";

// console.log(parrafo.split(" "));
let array2 = [];

/*
string
int
double 
float
null
undefined
boolean
Symbol (?)
*/

console.log(typeof array2);

if (typeof parrafo === "string") {
  console.log(
    "Es un string completamente verdadero, creanme por favor, juro que no un number traidor."
  );
}

console.log(
  `Repitiendo la variable ${nombre.trim()} 3 veces: ${nombre.trim().repeat(3)}`
);

console.log(`${nombre.trim().charAt(2)}`);

console.log(`El nombre completo seria: ${nombre.trim().concat(" Kainer")}`);
// let numeritos = [];
let numeritos = [1, 2, 3];
let numeritos2 = [4, 5, 6];
console.log(
  `Mostrando la concatenacion de 2 arrays con .concat(): `,
  numeritos.concat(numeritos2)
);

console.log(
  `El nombre empieza con una H?: ${nombre.trim().startsWith("H") ? "Si" : "No"}`
);

console.log(
  `El nombre termina con una a?: ${nombre.trim().endsWith("a") ? "Si" : "No"}`
);

console.log(
  `El nombre incluye una l?: ${nombre.trim().includes("l") ? "Si" : "No"}`
);
//Alba
//0,1,2,3
//lb
//slice(1,2) = l

console.log(parrafo.slice(parrafo.indexOf("Lorem"), "lorem".length + 1));
