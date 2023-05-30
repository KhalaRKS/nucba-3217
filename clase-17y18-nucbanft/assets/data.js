const productsData = [
  {
    id: 1,
    name: "Golden Messi",
    bid: 6.89,
    user: "thetroncous",
    category: "futbol",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/products/goldenmessi.png",
  },
  {
    id: 2,
    name: "Diego Maradona",
    bid: 5.89,
    user: "kirik8",
    category: "futbol",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/products/diego.png",
  },
  {
    id: 3,
    name: "L10nel Messi",
    bid: 4.89,
    user: "FD10S",
    category: "futbol",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/products/beardedmessi.png",
  },
  {
    id: 4,
    name: "M. Schumacher",
    bid: 3.67,
    user: "Urastream",
    category: "autos",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/products/schumacher.png",
  },
  {
    id: 5,
    name: "Fernando Alonso",
    bid: 4.52,
    user: "Gulineta",
    category: "autos",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/products/alonso.png",
  },
  {
    id: 6,
    name: "Dominic Toretto",
    bid: 7.33,
    user: "HardBena",
    category: "autos",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/products/toretto.png",
  },
  {
    id: 7,
    name: "Donald Trump",
    bid: 2.2,
    user: "ThingyCake",
    category: "politicos",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/products/trump.png",
  },
  {
    id: 8,
    name: "Xi Jinping",
    bid: 1.12,
    user: "NickyG",
    category: "politicos",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/products/jinping.png",
  },
  {
    id: 9,
    name: "Vladimir Putin",
    bid: 0.5,
    user: "ThingyBit",
    category: "politicos",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/products/putin.png",
  },
  {
    id: 10,
    name: "Michael Jackson",
    bid: 8.35,
    user: "LilKenny",
    category: "musica",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/products/jackson.png",
  },
  {
    id: 11,
    name: "Bruno Mars",
    bid: 8.65,
    user: "Sharkenetta",
    category: "musica",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/products/mars.png",
  },
  {
    id: 12,
    name: "Bad Bunny",
    bid: 9.29,
    user: "MG9",
    category: "musica",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/products/bunny.png",
  },
  {
    id: 13,
    name: "Keanu Reeves",
    bid: 8.27,
    user: "MrMoustache",
    category: "peliculas",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/products/reeves.png",
  },
  {
    id: 14,
    name: "Jason Stathan",
    bid: 5.55,
    user: "PasquSaw",
    category: "peliculas",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/products/stathan.png",
  },
  {
    id: 15,
    name: "Angelina Jolie",
    bid: 7.46,
    user: "CamiCrow",
    category: "peliculas",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/products/jolie.png",
  },
];

// Función para dividr los productos en arrays de "x cantidad" de productos
const divideProductsInParts = (size) => {
  let productsList = [];
  //           6              15
  for (let i = 0; i < productsData.length; i += size) {
    productsList.push(productsData.slice(i, i + size));
    console.log(productsList); // [[1,2,3,4,5,],[6,7,8,9,10],[11,12,13,14,15]]
  }
  return productsList;
};

// Objeto para dividir los productos en arrays de 6 productos y manejar la paginación

const appState = {
  products: divideProductsInParts(6), // [[1,2,3,4,5,6],[6,7,8,9,10,1],[11,12,13]]
  currentProductsIndex: 0,
  productsLimit: divideProductsInParts(6).length, // [[1,2,3,4,5,6],[6,7,8,9,10,1],[11,12,13]].length // 3 -1 = 2
  activeFilter: null,
};
