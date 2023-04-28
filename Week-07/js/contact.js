window.addEventListener("load", function () {
  const form = document.querySelector("form");
  const nameInput = form.querySelector("#name");

  const emailInput = form.querySelector("#email");

  const commentInput = form.querySelector("#comment");

  function onlyLeters(word) {
    for (var i = 0; i < word.length; i++) {
      var leter = word.charAt(i);
      if ((leter < "a" || leter > "z") && (leter < "A" || leter > "Z")) {
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
  function validarEmail(email) {
    const re = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }
  emailInput.addEventListener("blur", function () {
    if (!validarEmail(emailInput.value)) {
      emailInput.classList.add("error");
      emailError.textContent = stringErrorMail;
    }
  });
});
