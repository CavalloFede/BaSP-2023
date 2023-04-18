console.log("--Part 3: Arrays");
console.log("-Exercise 1");
/*
    1-Dado el siguiente array: ["Enero", "Febrero", 
    "Marzo", "Abril", "Mayo", "Junio", "Julio", 
    "Agosto", "Septiembre", "Octubre", "Noviembre", 
    "Diciembre"] mostrar por consola los meses 
    5 y 11 (utilizar console.log).
*/
var months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
console.log(months[4]);
console.log(months[10]);
console.log("-Exercise 2");
/*
    2-Ordenar el array de meses alfabéticamente y 
    mostrarlo por consola (utilizar sort).
*/
var orderMonths = months.slice();
orderMonths.sort();
console.log(orderMonths);
console.log("-Exercise 3");
/*
    3-Agregar un elemento al principio y al final del
    array (utilizar unshift y push).
*/
months.unshift("comienzo");
months.push("final");
console.log(months);
console.log("-Exercise 4");
/*
    4-Quitar un elemento del principio y del final del 
    array (utilizar shift y pop).
*/
months.shift("comienzo");
months.pop("final");
console.log(months);
console.log("-Exercise 5");
/*
    5-Invertir el orden del array (utilizar reverse).
*/
var reverseMonths = months.slice();
reverseMonths.reverse();
console.log(reverseMonths);
console.log("-Exercise 6");
/*
    6-Unir todos los elementos del array en un único 
    string donde cada mes este separado por un 
    guión - (utilizar join).
*/
var joinMonths = months.join("-");
console.log(joinMonths);
console.log("-Exercise 7");
/*
    7-Crear una copia del array de meses que 
    contenga desde Mayo hasta Noviembre (utilizar slice).
*/
var sliceMonths = months.slice(4, 11);
console.log(sliceMonths);