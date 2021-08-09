window.onload = () => {
  const button = document.querySelector("button");
  const emailField = document.getElementById("email-input");
  const emailContainer = document.querySelector(".email-field");
  const errorMessage = document.querySelector(".error");

  function validateEmail() {
    let regex = /.+@[a-zA-Z]+\.[a-zA-Z]+/;
    const validEmail = regex.test(emailField.value);
    if (validEmail) {
      emailContainer.style.border = "1px solid #d3d3d3";
      errorMessage.style.display = "none";
    } else {
      emailContainer.style.border = "2px solid hsl(0, 93%, 68%)";
      errorMessage.style.display = "block";
    }
  }

  button.addEventListener("click", validateEmail);
  emailField.addEventListener("keyup", (e) => {
    if (e.keyCode == 13) {
      validateEmail();
    }
  });
};
