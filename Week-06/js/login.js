window.addEventListener("load", function () {
  const form = document.querySelector("form");
  const emailInput = form.querySelector("#email");
  const emailError = document.querySelector("#email + .error-message");
  const passwordInput = form.querySelector("#password");
  const passError = document.querySelector("#password + .error-message");
  const stringErrorMail = "Invalid email format";
  const stringErrorPass =
    "Password must be at least 8 characters and contain numbers and letters";
  function validarEmail(email) {
    const re = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }
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
  emailInput.addEventListener("blur", function () {
    if (!validarEmail(emailInput.value)) {
      emailInput.classList.add("error");
      emailError.textContent = stringErrorMail;
    }
  });
  passwordInput.addEventListener("blur", function () {
    if (!validarPassword(passwordInput.value)) {
      passwordInput.classList.add("error");
      passError.textContent = stringErrorPass;
    }
  });
  emailInput.addEventListener("focus", limpiarErrores);
  passwordInput.addEventListener("focus", limpiarErrores);
  function limpiarErrores() {
    this.classList.remove("error");
    if (this.id == "email") {
      emailError.textContent = "";
    } else if (this.id == "password") {
      passError.textContent = "";
    }
  }
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!validarEmail(emailInput.value)) {
      emailInput.classList.add("error");
      emailError.textContent = stringErrorMail;
    }
    if (!validarPassword(passwordInput.value)) {
      passwordInput.classList.add("error");
      passError.textContent = stringErrorPass;
    }
    if (
      emailInput.classList.contains("error") ||
      passwordInput.classList.contains("error")
    ) {
      alert(
        "Please correct any errors in the form before submitting it:\n" +
          emailError.textContent +
          "\n" +
          passError.textContent +
          "\n\nEmail: " +
          emailInput.value +
          "\nPassword: " +
          passwordInput.value
      );
    } else {
      alert(
        "Form data: \nEmail: " +
          emailInput.value +
          "\nPassword: " +
          passwordInput.value
      );
    }
  });
});
