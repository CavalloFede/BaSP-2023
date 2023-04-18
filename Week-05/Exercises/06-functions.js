console.log("--Part 6: Funciones");
console.log("-Exercise 1");
/*
    1-Crear una función suma que reciba dos valores numéricos
    y retorne el resultado. Ejecutar la función y guardar el 
    resultado en una variable, mostrando el valor de dicha 
    variable en la consola del navegador.
*/
function sum(a, b) {
  return a + b;
}
var result = sum(5, 7);
console.log(result);

console.log("-Exercise 2");
/*
    2-Copiar la función suma anterior y agregarle una validación 
    para controlar si alguno de los parámetros no es un número; 
    de no ser un número, mostrar un alert aclarando que uno de 
    los parámetros tiene error y retornar el valor NaN como resultado.
*/
function sumValid(a, b) {
  if (isNaN(a) || isNaN(b)) {
    alert("Uno de los valores no es un numero");
    return NaN;
  }
  return a + b;
}
var result = sumValid(5, 7);
console.log(result);
result = sumValid("a", 7);
console.log(result);

console.log("-Exercise 3");
/*
    3-Crear una función “validateInteger” que reciba un número 
    como parámetro y devuelva verdadero si es un número entero.
*/
function validateInteger(num) {
  return !Number.isInteger(num);
}
result = validateInteger(1);
console.log(result);
result = validateInteger(1.5);
console.log(result);
console.log("-Exercise 4");
/*
    4-Copiar y renombrar la función suma del ejercicio 6b) y 
    agregarle una llamada a la función del ejercicio 6c. y que 
    valide que los números sean enteros. En caso que haya decimales 
    mostrar un alert con el error y retornar el número convertido 
    a entero (redondeado).
*/
function sumValidInteger(a, b) {
  if (isNaN(a) || isNaN(b)) {
    alert("Uno de los valores no es un numero");
    return NaN;
  }
  if (validateInteger(a) || validateInteger(b)) {
    alert("Uno de los parámetros no es un número entero");
    return Math.round(a) + Math.round(b);
  }
  return a + b;
}
result = sumValidInteger(1, 2);
console.log(result);
result = sumValidInteger("a", 2);
console.log(result);
result = sumValidInteger(1.9, 2);
console.log(result);
console.log("-Exercise 5");
/*
    5-Convertir la validación del ejercicio 6d) en una función 
    separada y llamarla dentro de una nueva función probando 
    que todo siga funcionando igual que en el apartado anterior.
*/
function isNaNorInteger(number) {
  if (isNaN(number)) {
    alert(number + " no es un numero");
    return NaN;
  }
  if (validateInteger(number)) {
    alert("El parámetro " + number + " no es un número entero");
    return Math.round(number);
  }
  return number
}

function sumValidOutside(a, b) {
  return isNaNorInteger(a) + isNaNorInteger(b);
}
result = sumValidInteger(1, 2);
console.log(result)
result = sumValidInteger("a", 2);
console.log(result)
result = sumValidInteger(1.9, 2);
console.log(result)
