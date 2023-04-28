window.addEventListener("load", function () {
  const form = document.querySelector("form");
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
  const urlApi = "https://api-rest-server.vercel.app/signup?";
  //#region Funciones
  function onlyLeters(word) {
    for (var i = 0; i < word.length; i++) {
      var leter = word.charAt(i);
      if ((leter < "a" || leter > "z") && (leter < "A" || leter > "Z")) {
        return false;
      }
    }
    return true;
  }
  function onlyNumbers(numbers) {
    for (var i = 0; i < numbers.length; i++) {
      if (isNaN(numbers.charAt(i))) {
        return false;
      }
    }
    return true;
  }
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
  function AlphanumericWhitSpace(string) {
    var indiceEspacios = getWhiteSpaces(string);
    if (indiceEspacios.length < 1 || indiceEspacios.length > 1) {
      return false;
    }
    var word1 = string.substring(0, indiceEspacios[0]);
    var word2 = string.substring(indiceEspacios[0] + 1);
    if (Alphanumeric(word2) || Alphanumeric(word1)) {
      return true;
    } else {
      return false;
    }
  }
  function getWhiteSpaces(string) {
    var posiciones = [];
    for (var i = 0; i < string.length; i++) {
      if (string[i] === " ") {
        posiciones.push(i);
      }
    }
    return posiciones;
  }
  function displayError(input, span, mensaje) {
    const errorSpan = span;
    errorSpan.textContent = mensaje;
    input.addEventListener("focus", function () {
      errorSpan.textContent = "";
    });
  }
  //#endregion
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

  errorSpanName = document.querySelector("#error-name");
  errorSpanLastName = document.querySelector("#error-lastName");
  errorSpanDni = document.querySelector("#error-dni");
  errorSpanPhone = document.querySelector("#error-phone");
  errorSpanDate = document.querySelector("#error-birthDate");
  errorSpanAddress = document.querySelector("#error-address");
  errorSpanLocation = document.querySelector("#error-location");
  errorSpanZipCode = document.querySelector("#error-zipCode");
  errorSpanEmail = document.querySelector("#error-email");
  errorSpanPassword = document.querySelector("#error-password");
  errorSpanConfirmPassword = document.querySelector("#error-confirmPassword");
  //#region Validaciones
  function validateName() {
    var name = nameInput.value.trim();
    if (!onlyLeters(name) || name.length < 3) {
      displayError(
        nameInput,
        errorSpanName,
        "The name needs to be only leters and have at least 3 characters long"
      );
    }
  }
  function validateLastName() {
    var lastName = lastNameInput.value.trim();
    if (!onlyLeters(lastName) || lastName.length < 3) {
      displayError(
        lastNameInput,
        errorSpanLastName,
        "The lastname needs to be only leters and have at least 3 characters long"
      );
    }
  }
  function validateDni() {
    var dni = dniInput.value.trim();
    if (!onlyNumbers(dni) || dni.length < 7 || dni.length > 8) {
      displayError(
        dniInput,
        errorSpanDni,
        "DNI needs to be only numbers and must have between 7 and 8 numbers"
      );
    }
  }
  function validateDate() {
    var date = birthDateInput.value;
    if (date.length == 10) {
      if (date.charAt(2) == "/" && date.charAt(5) == "/") {
        const dia = parseInt(date.substring(0, 2));
        const mes = parseInt(date.substring(3, 5)) - 1;
        const anio = parseInt(date.substring(6, 10));
        const fecha = new Date(anio, mes, dia);
        if (anio >= 1920 && Date.now() > fecha.getTime()) {
          if (isNaN(fecha.getTime())) {
            displayError(
              birthDateInput,
              errorSpanDate,
              "The only dates formats acceptable is dd/mm/aaaa"
            );
          }
        } else {
          displayError(
            birthDateInput,
            errorSpanDate,
            "The date can be lower than 1920 and cant be higher than today "
          );
        }
      } else {
        displayError(
          birthDateInput,
          errorSpanDate,
          "The only dates formats acceptable is dd/mm/aaaa"
        );
      }
    } else {
      displayError(
        birthDateInput,
        errorSpanDate,
        "The only dates formats acceptable is dd/mm/aaaa"
      );
    }
  }
  function validatePhone() {
    var phone = phoneInput.value.trim();
    if (!onlyNumbers(phone) || phone.length != 10) {
      displayError(
        phoneInput,
        errorSpanPhone,
        "The phone number can only contain numbers and needs to be 10 characters long"
      );
    }
  }
  function validateAddress() {
    var address = addressInput.value.trim();
    if (!AlphanumericWhitSpace(address) || address.length < 5) {
      displayError(
        addressInput,
        errorSpanAddress,
        "La direccion debe contener solo numeros, letras y solo un espacio y tener al menos 5 caracteres."
      );
    }
  }
  function validateLocation() {
    var location = locationInput.value.trim();
    if (!Alphanumeric(location) || location.length < 4) {
      displayError(
        locationInput,
        errorSpanLocation,
        "The location can only contain numbers and leters and need to be at least 4 characters long"
      );
    }
  }
  function validateZipCode() {
    var zipCode = zipCodeInput.value.trim();
    if (!onlyNumbers(zipCode) || zipCode.length < 4 || zipCode.length > 5) {
      displayError(
        zipCodeInput,
        errorSpanZipCode,
        "The Zip code need to be made only of numbers an be between 4 and 5 characters long"
      );
    }
  }
  function validateEmail() {
    var email = emailInput.value.trim();
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (!emailExpression.test(email)) {
      displayError(emailInput, errorSpanEmail, "Invalid mail format");
    }
  }
  function validatePassword() {
    var password = passwordInput.value.trim();
    if (!Alphanumeric(password) || password.length < 8) {
      displayError(
        passwordInput,
        errorSpanPassword,
        "The password can only have numbers and leters and need to be at least 8 characters long"
      );
    }
  }
  function validateConfirmPassword() {
    var password = passwordInput.value.trim();
    var confirmPassword = confirmPasswordInput.value.trim();
    if (confirmPassword != password)
      displayError(
        passwordInput,
        errorSpanConfirmPassword,
        "Both passwords neeed to match"
      );
  }
  function validateAll() {
    validateName();
    validateLastName();
    validateDni();
    validateDate();
    validatePhone();
    validateAddress();
    validateLocation();
    validateZipCode();
    validateEmail();
    validatePassword();
    validateConfirmPassword();
    validatePassword();
  }
  function checkErrors() {
    if (errorSpanName.textContent != "") {
      return true;
    }
    if (errorSpanLastName.textContent != "") {
      return true;
    }
    if (errorSpanDni.textContent != "") {
      return true;
    }
    if (errorSpanDate.textContent != "") {
      return true;
    }
    if (errorSpanPhone.textContent != "") {
      return true;
    }
    if (errorSpanAddress.textContent != "") {
      return true;
    }
    if (errorSpanLocation.textContent != "") {
      return true;
    }
    if (errorSpanZipCode.textContent != "") {
      return true;
    }
    if (errorSpanEmail.textContent != "") {
      return true;
    }
    if (errorSpanPassword.textContent != "") {
      return true;
    }
    if (errorSpanConfirmPassword.textContent != "") {
      return true;
    }
    return false;
  }
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    validateAll();
    const datosFormulario = {
      name: nameInput.value,
      lastName: lastNameInput.value,
      dni: dniInput.value,
      dob: birthDateInput.value,
      phone: phoneInput.value,
      address: addressInput.value,
      city: locationInput.value,
      zip: zipCodeInput.value,
      email: emailInput.value,
      password: passwordInput.value,
      confirmPassword: confirmPasswordInput.value,
    };
    if (checkErrors()) {
      alert(
        "Please correct any errors in the form before submitting it:\n" +
          errorSpanName.textContent +
          "\n" +
          errorSpanLastName.textContent +
          "\n" +
          errorSpanDni.textContent +
          "\n" +
          errorSpanDate.textContent +
          "\n" +
          errorSpanPhone.textContent +
          "\n" +
          errorSpanAddress.textContent +
          "\n" +
          errorSpanLocation.textContent +
          "\n" +
          errorSpanZipCode.textContent +
          "\n" +
          errorSpanEmail.textContent +
          "\n" +
          errorSpanPassword.textContent +
          "\n" +
          errorSpanConfirmPassword.textContent +
          "\n\nName: " +
          datosFormulario.name +
          "\nLastname: " +
          datosFormulario.lastName +
          "\nDNI: " +
          datosFormulario.dni +
          "\nBirthDate: " +
          datosFormulario.dob +
          "\nPhone: " +
          datosFormulario.phone +
          "\nAddress: " +
          datosFormulario.address +
          "\nLocation: " +
          datosFormulario.location +
          "\nZipCode: " +
          datosFormulario.zip +
          "\nEmail: " +
          datosFormulario.email +
          "\nPassword: " +
          datosFormulario.password +
          "\nConfirm Password: " +
          datosFormulario.confirmPassword
      );
    } else {
      const queryString =
        "name=" +
        datosFormulario.name +
        "&lastName=" +
        datosFormulario.lastName +
        "&dni=" +
        datosFormulario.dni +
        "&dob=" +
        datosFormulario.dob +
        "&phone=" +
        datosFormulario.phone +
        "&address=" +
        datosFormulario.address +
        "&city=" +
        datosFormulario.city +
        "&zip=" +
        datosFormulario.zip +
        "&email=" +
        datosFormulario.email +
        "&password=" +
        datosFormulario.password;

      fetch(urlApi + queryString, {
        method: "GET",
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          if (data.success) {
            alert("Succes: " + data.msg);
            localStorage.setItem("user", JSON.stringify(data.data));
            window.location.href = "login.html";
          } else {
            let errorMsg = "";
            data.errors.forEach(function (error) {
              errorMsg += error.msg + "\n";
            });
            alert("Errors:\n" + errorMsg);
          }
        })
        .catch(function (error) {
          console.error(error);
          alert("Something went wrong");
        });
    }
  });
  //#endregion
});
