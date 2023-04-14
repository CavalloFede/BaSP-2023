console.log("--Part 5: For");
console.log("-Exercise 1");
/*
    1-Crear un array que contenga 5 palabras y recorrer
    dicho array utilizando un bucle for de JavaScript 
    para mostrar una alerta utilizando cada una de 
    las palabras.
*/
let palabras = ["hola", "mundo", "palabras", "array", "for"];
for (let i = 0; i < palabras.length; i++) {
  console.log(palabras[i]);
}

console.log("-Exercise 2");
/*
    2-Al array anterior convertir la primera letra de 
    cada palabra en mayúscula y mostrar una alerta 
    por cada palabra modificada.
*/

for (let i = 0; i < palabras.length; i++) {
  let primeraLetra = palabras[i].charAt(0).toUpperCase();
  palabras[i] = primeraLetra + palabras[i].slice(1);
  console.log(palabras[i]);
}
console.log("-Exercise 3");
/*
    3-Crear una variable llamada “sentence” que tenga un
    string vacío, luego al array del punto a) recorrerlo 
    con un bucle for para ir guardando cada palabra 
    dentro de la variable sentence. Al final mostrar 
    una única alerta con la cadena completa.
*/
let sentence = "";
for (let i = 0; i < palabras.length; i++) {
  sentence += palabras[i] + " ";
}
console.log(sentence);
console.log("-Exercise 4");
/*
    4-Crear un array vacío y con un bucle for de 10 repeticiones.
    Llenar el array con el número de la repetición, es decir 
    que al final de la ejecución del bucle for debería haber 
    10 elementos dentro del array, desde el número 0 hasta al 
    número 9. Mostrar por la consola del navegador el array 
    final (utilizar console.log).
*/
let arrayEmpty = [];
for (var i = 0; i < 10; i++) {
  arrayEmpty.push(i);
}
console.log(arrayEmpty)
