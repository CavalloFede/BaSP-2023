window.addEventListener("load", function () {
  const form = document.querySelector("form");
  const emailInput = form.querySelector("#email");
  const emailError = document.querySelector("#email + .error-message");
  const passwordInput = form.querySelector("#password");
  const passError = document.querySelector("#password + .error-message");
  const stringErrorMail = "Por favor ingrese un email válido";
  const stringErrorPass =
    "La contraseña debe tener al menos 8 caracteres y contener números y letras";
  // Función para validar el formato del email
  function validarEmail(email) {
    const re = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }
  // Función para validar la password
  function validarPassword(password) {
    let hasLetter = false;
    let hasNumber = false;
    let hasLength = password.length >= 8;
    for (let i = 0; i < password.length; i++) {
      const charCode = password.charCodeAt(i);
      if (!isNaN(charCode) && charCode >= 48 && charCode <= 57) {
        hasNumber = true;
      } else if (
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122)
      ) {
        hasLetter = true;
      }
    }
    return hasLetter && hasNumber && hasLength;
  }
  // Evento onBlur del input email
  emailInput.addEventListener("blur", function () {
    if (!validarEmail(emailInput.value)) {
      emailInput.classList.add("error");
      emailError.textContent = stringErrorMail;
    }
  });

  // Evento onBlur del input password
  passwordInput.addEventListener("blur", function () {
    if (!validarPassword(passwordInput.value)) {
      passwordInput.classList.add("error");
      passError.textContent = stringErrorPass;
    }
  });
  // Evento onFocus de los inputs
  emailInput.addEventListener("focus", limpiarErrores);
  passwordInput.addEventListener("focus", limpiarErrores);
  // Función para limpiar los mensajes de error
  function limpiarErrores() {
    this.classList.remove("error");
    if (this.id == "email") {
      emailError.textContent = "";
    } else if (this.id == "password") {
      passError.textContent = "";
    }
  }
  // Evento onSubmit del formulario
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Validar email
    if (!validarEmail(emailInput.value)) {
      emailInput.classList.add("error");
      emailError.textContent = stringErrorMail;
    }
    // Validar password
    if (!validarPassword(passwordInput.value)) {
      passwordInput.classList.add("error");
      passError.textContent = stringErrorPass;
    }
    // Si hay errores, mostrar alerta y los campos del formulario
    if (
      emailInput.classList.contains("error") ||
      passwordInput.classList.contains("error")
    ) {
      console.log(emailError.value);
      alert(
        "Por favor corrija los errores en el formulario antes de enviarlo:\n" +
          emailError.textContent +
          "\n" +
          passError.textContent +
          "\n\nCorreo electrónico: " +
          emailInput.value +
          "\nContraseña: " +
          passwordInput.value
      );
    } else {
      // Si no hay errores, mostramos los datos del formulario en un alert
      alert(
        "Datos del formulario: \nCorreo electrónico: " +
          emailInput.value +
          "\nContraseña: " +
          passwordInput.value
      );
    }
  });
});
