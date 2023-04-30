window.addEventListener("load", function () {
  const form = document.querySelector("form");
  const emailInput = form.querySelector("#email");
  const emailError = document.querySelector("#email + .error-message");
  const passwordInput = form.querySelector("#password");
  const passError = document.querySelector("#password + .error-message");
  const stringErrorMail = "Invalid email format";
  const stringErrorPass =
    "Password must be at least 8 characters and contain numbers and letters";
  const urlApi = "https://api-rest-server.vercel.app/login?";
  const userData = localStorage.getItem("user");
  if (userData) {
    const user = JSON.parse(userData);
    emailInput.value = user.email;
    passwordInput.value = user.password;
    localStorage.removeItem("user");
  }
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
    const datosFormulario = {
      email: emailInput.value,
      password: passwordInput.value,
    };
    if (!validarEmail(datosFormulario.email)) {
      emailInput.classList.add("error");
      emailError.textContent = stringErrorMail;
    }
    if (!validarPassword(datosFormulario.password)) {
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
          datosFormulario.email +
          "\nPassword: " +
          datosFormulario.password
      );
    } else {
      const queryString =
        "email=" +
        datosFormulario.email +
        "&password=" +
        datosFormulario.password;
      console.log(urlApi + queryString);
      fetch(urlApi + queryString, {
        method: "GET",
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          if (data.success) {
            alert("Succes: " + data.msg);
          } else {
            alert("Error: " + data.msg);
          }
        })
        .catch(function (error) {
          console.error(error);
          alert("Something went wrong");
        });
    }
  });
});
