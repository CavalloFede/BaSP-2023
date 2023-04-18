console.log("--Part 2: Strings");
console.log("-Exercise 1");
/*
    1-Crear una variable de tipo string con al menos 10 caracteres y 
    convertir todo el texto en mayúscula (utilizar toUpperCase).
*/
var text = "ejemplo de texto";
var textAllCaps = text.toUpperCase();
console.log(textAllCaps);
console.log("-Exercise 2");
/*
    2-Crear una variable de tipo string con al menos 10 caracteres y 
    generar un nuevo string con los primeros 5 caracteres guardando 
    el resultado en una nueva variable (utilizar substring).
*/
var text = "ejemplo de texto";
var firstFiveCharacters = text.substring(0, 5);
console.log(firstFiveCharacters);
console.log("-Exercise 3");
/*
    3- Crear una variable de tipo string con al menos 10 caracteres y 
    generar un nuevo string con los últimos 3 caracteres guardando 
    el resultado en una nueva variable (utilizar substring).
*/
var text = "ejemplo de texto";
var lastThreeCharacters = text.substring(text.length - 3);
console.log(lastThreeCharacters);
console.log("-Exercise 4");
/*
    4- Crear una variable de tipo string con al menos 10 caracteres y 
    generar un nuevo string con la primera letra en mayúscula y las
    demás en minúscula. Guardar el resultado en una nueva variable 
    (utilizar substring, toUpperCase, toLowerCase y el operador +).
*/
var text = "ejemplo de texto";
var firstLetterInUpperCase = text.substring(0, 1).toUpperCase();
var restOfTheTextInLowerCase = text.substring(1).toLowerCase();
var newText = firstLetterInUpperCase + restOfTheTextInLowerCase;
console.log(newText);
console.log("-Exercise 5");
/*   
    5-Crear una variable de tipo string con al menos 10 caracteres y 
    algún espacio en blanco. Encontrar la posición del primer espacio
    en blanco y guardarla en una variable (utilizar indexOf).
*/
var text = "ejemplo de texto";
var positionOfBlankSpace = text.indexOf(" ");
console.log(positionOfBlankSpace);
console.log("-Exercise 6");
/*
    6- Crear una variable de tipo string con al menos 2 palabras largas 
    (10 caracteres y algún espacio entre medio). Utilizar los métodos 
    de los ejercicios anteriores para generar un nuevo string que tenga 
    la primera letra de ambas palabras en mayúscula y las demás letras 
    en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase
    y el operador +).
*/
var longWords = "extrañezas cabizbajas";
var firstBlankSpace = longWords.indexOf(" ");
var firstWord = longWords.substring(0, firstBlankSpace);
var secondWord = longWords.substring(firstBlankSpace + 1);
var capitalizedFirstWord =
  firstWord.substring(0, 1).toUpperCase() +
  firstWord.substring(1).toLowerCase();
var capitalizedSecondWord =
  secondWord.substring(0, 1).toUpperCase() +
  secondWord.substring(1).toLowerCase();
var newString = capitalizedFirstWord + " " + capitalizedSecondWord;
console.log(newString);