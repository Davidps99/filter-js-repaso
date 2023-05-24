// Ejercicio 1: Filtrar números pares

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((num) => num % 2 == 0);
console.log("Números pares: ", evenNumbers); // Resultado esperado: [2, 4, 6, 8, 10]

// Ejercicio 2: Filtrar cadenas de texto que contengan la letra guardada en la variable 'letter'
const words = ["apple", "banana", "grape", "orange", "kiwi"];
const letter = "a";
const filteredWords = words.filter((word) => word.includes(letter));
console.log(
  "Palabras que contengan la letra de la variable letter: ",
  filteredWords
); // Resultado esperado: ['apple', 'banana', 'grape', 'orange']

// Ejercicio 2b: Filtrar cadenas de texto que NO contengan la letra guardada en la variable 'letter'
const words_2 = ["apple", "banana", "grape", "orange", "kiwi"];
const letter_2 = "a";
const filteredWords_2 = words_2.filter((word) => !word.includes(letter_2));
console.log(
  "Palabras que NO contengan la letra contenido en la variable letter: ",
  filteredWords_2
); // Resultado esperado: ['kiwi']

// Ejercicio 3: Filtrar los productos cuyo precio sea menor de 900
const products = [
  { name: "iPhone", price: 1000 },
  { name: "Samsung Galaxy", price: 800 },
  { name: "Google Pixel", price: 700 },
  { name: "OnePlus", price: 600 },
];
const affordableProducts = products.filter((product) => product.price < 900);
console.log("Teléfonos baratos: ", affordableProducts); // Resultado esperado: [{ name: 'Samsung Galaxy', price: 800 }, { name: 'Google Pixel', price: 700 }, { name: 'OnePlus', price: 600 }]

// Ejercicio 5: Filtrar elementos que sean múltiplos de 3
const numbers_3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplesOfThree = numbers_3.filter((num) => num % 3 == 0);
console.log("Múltiplos de 3: ", multiplesOfThree); // Resultado esperado: [3, 6, 9]

// Ejercicio 6: Filtra aquellos coches que son de la marca BMW y que además cuestan menos de 27000
const cars = [
  { brand: "Toyota", price: 20000, color: "blue" },
  { brand: "BMW", price: 30000, color: "red" },
  { brand: "Tesla", price: 50000, color: "black" },
  { brand: "Honda", price: 15000, color: "silver" },
  { brand: "BMW", price: 25000, color: "silver" },
];
const filteredCars = cars.filter(
  (car) => car.price < 27000 && car.brand == "BMW"
);
console.log("Coches asequibles", filteredCars); // Resultado esperado: [{ brand: 'BMW', price: 25000, color: 'silver' }]
