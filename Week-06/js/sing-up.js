window.addEventListener("load", function () {
  const form = document.querySelector("form");
  // obtiene los campos de entrada de texto del formulario
  const nameInput = form.querySelector("#name");
  const lastNameInput = form.querySelector("#lastName");
  const dniInput = form.querySelector("#dni");
  const birthDateInput = form.querySelector("#birthDate");
  const phoneInput = form.querySelector("#phone");
  const addressInput = form.querySelector("#address");
  const locationInput = form.querySelector("#location");
  const zipCodeInput = form.querySelector("#zipCode");
  const emailInput = form.querySelector("#email");
  const passwordInput = form.querySelector("#password");
  const confirmPasswordInput = form.querySelector("#confirmPassword");

  // agrega un evento "blur" a cada campo de entrada de texto
  nameInput.addEventListener("blur", validateName);
  lastNameInput.addEventListener("blur", validateLastName);
  dniInput.addEventListener("blur", validateDni);
  birthDateInput.addEventListener("blur", validateDate);
  phoneInput.addEventListener("blur", validatePhone);
  addressInput.addEventListener("blur", validateAddress);
  locationInput.addEventListener("blur", validateLocation);
  zipCodeInput.addEventListener("blur", validateZipCode);
  emailInput.addEventListener("blur", validateEmail);
  passwordInput.addEventListener("blur", validatePassword);
  confirmPasswordInput.addEventListener("blur", validateConfirmPassword);
  //#region Validaciones
  // Función para validar el name
  function validateName() {
    var name = nameInput.value.trim();
    if (!onlyLeters(name) || name.length < 3) {
      displayError(
        nameInput,
        "#error-name",
        "El nombre debe contener solo letras y tener al menos 3 caracteres."
      );
    }
  }
  // función de validación para el campo de last name
  function validateLastName() {
    var lastName = lastNameInput.value.trim();
    if (!onlyLeters(lastName) || lastName.length < 3) {
      displayError(
        lastNameInput,
        "#error-lastName",
        "El apellido debe contener solo letras y tener al menos 3 caracteres."
      );
    }
  }
  // función de validación para el campo de dni
  function validateDni() {
    var dni = dniInput.value.trim();
    if (!onlyNumbers(dni) || dni.length < 7) {
      displayError(
        dniInput,
        "#error-dni",
        "El dni debe contener solo numeros y tener al menos 7 caracteres."
      );
    }
  }
  function validateDate() {
    var date = birthDateInput.value;
    if (date.length == 10) {
      if (date.charAt(2) == "/" && date.charAt(5) == "/") {
        console.log("hola");
        const dia = parseInt(date.substring(0, 2));
        const mes = parseInt(date.substring(3, 5)) - 1; // Restar 1 al mes porque los meses en JavaScript empiezan en 0
        const anio = parseInt(date.substring(6, 10));
        const fecha = new Date(anio, mes, dia);
        if (isNaN(fecha.getTime())) {
          displayError(
            birthDateInput,
            "#error-birthDate",
            "Solo se aceptan fechas con formato dd/mm/aaaa"
          );
        }
      } else {
        displayError(
          birthDateInput,
          "#error-birthDate",
          "Solo se aceptan fechas con formato dd/mm/aaaa"
        );
      }
    } else {
      displayError(
        birthDateInput,
        "#error-birthDate",
        "Solo se aceptan fechas con formato dd/mm/aaaa"
      );
    }
  }
  // función de validación para el campo de phone
  function validatePhone() {
    var phone = phoneInput.value.trim();
    if (!onlyNumbers(phone) || phone.length != 10) {
      displayError(
        phoneInput,
        "#error-phone",
        "El telefono debe contener solo numeros y tener al menos 10 caracteres."
      );
    }
  }
  // función de validación para el campo de address
  function validateAddress() {
    var address = addressInput.value.trim();
    if (!AlphanumericWhitSpace(address) || address.length < 5) {
      displayError(
        addressInput,
        "#error-address",
        "La direccion debe contener solo numeros, letras y solo un espacio y tener al menos 5 caracteres."
      );
    }
  }
  function validateLocation() {
    var location = locationInput.value.trim();
    if (!Alphanumeric(location) || location.length < 4) {
      displayError(
        locationInput,
        "#error-location",
        "La location debe contener solo numeros, letras y tener al menos 3 caracteres."
      );
    }
  }
  // función de validación para el campo de zipcode
  function validateZipCode() {
    var zipCode = zipCodeInput.value.trim();
    if (!onlyNumbers(zipCode) || zipCode.length < 4 || zipCode.length > 5) {
      console.log(zipCode);
      displayError(
        zipCodeInput,
        "#error-zipCode",
        "El Zip code debe contener solo numeros y tener entre 4 y 5 caracteres."
      );
    }
  }
  function validateEmail() {
    var email = emailInput.value.trim();
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (!emailExpression.test(email)) {
      displayError(
        emailInput,
        "#error-email",
        "El email tiene un formato invalido"
      );
    }
  }
  function validatePassword() {
    var password = passwordInput.value.trim();
    if (!Alphanumeric(password) || password.length < 8) {
      displayError(
        passwordInput,
        "#error-password",
        "La password code debe contener solo numeros y tener entre mas de 8 caracteres"
      );
    }
  }
  function validateConfirmPassword() {
    var password = passwordInput.value.trim();
    var confirmPassword = confirmPasswordInput.value.trim();
    if (confirmPassword != password)
      displayError(
        passwordInput,
        "#error-confirmPassword",
        "Ambas passwords deben ser iguales"
      );
  }
  //#endregion
  //#region Funciones
  // función para comprobar si una cadena contiene solo letras
  function onlyLeters(word) {
    for (var i = 0; i < word.length; i++) {
      var leter = word.charAt(i);
      if ((leter < "a" || leter > "z") && (leter < "A" || leter > "Z")) {
        return false;
      }
    }
    return true;
  }
  // función para comprobar si una cadena contiene solo numeros
  function onlyNumbers(numbers) {
    for (var i = 0; i < numbers.length; i++) {
      if (isNaN(numbers.charAt(i))) {
        return false;
      }
    }
    return true;
  }
  // función para comprobar si una cadena contiene numeros y letras
  function Alphanumeric(word) {
    for (var i = 0; i < word.length; i++) {
      var leter = word.charAt(i);
      if (
        (leter < "a" || leter > "z") &&
        (leter < "A" || leter > "Z") &&
        (leter < "0" || leter > "9")
      ) {
        return false;
      }
    }
    return true;
  }
  // función para comprobar si una cadena contiene numeros y letras y un solo espacio
  function AlphanumericWhitSpace(string) {
    var indiceEspacios = obtenerEspacios(string);
    if (indiceEspacios.length < 1 || indiceEspacios.length > 1) {
      return false; // Si no hay espacio en la cadena o si tenemos mas de uno
    }
    var word1 = string.substring(0, indiceEspacios[0]);
    var word2 = string.substring(indiceEspacios[0] + 1);
    if (Alphanumeric(word2) || Alphanumeric(word1)) {
      return true;
    } else {
      return false;
    }
  }

  function obtenerEspacios(string) {
    var posiciones = [];
    for (var i = 0; i < string.length; i++) {
      if (string[i] === " ") {
        posiciones.push(i);
      }
    }
    return posiciones;
  }
  // función para mostrar un mensaje de error en el formulario
  function displayError(input, span, mensaje) {
    const errorSpan = document.querySelector(span);
    // agrega el mensaje de error después del campo de entrada de texto
    errorSpan.textContent = mensaje;
    // agrega un evento "focus" para eliminar el mensaje de error
    // si el usuario comienza a corregir el error
    input.addEventListener("focus", function () {
      errorSpan.textContent = "";
    });
  }
  //#endregion
});
