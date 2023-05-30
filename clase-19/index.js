let numero = 10;
let numero2 = 3;
let numero3 = 44;

function sumar(a, b) {
  return a + b;
}

setTimeout(function () {
  console.log("segundo");
  console.log(sumar(10, 20));
}, 2000);

setTimeout(function () {
  console.log("primero");
  console.log(sumar(10, 20));
}, 0);

console.log(numero);
