var nameIdInput = document.getElementById("nameId");
var emailIdInput = document.getElementById("emailId");
var passwordIdInput = document.getElementById("passwordId");
var btnIdInput = document.getElementById("btnId");
var msgAllInputs = document.getElementById("allInputs");
var msgEmailAlreadyExists = document.getElementById("emailAlreadyExists");
var success = document.getElementById("successId");

var signUp = [];

if (localStorage.getItem("signup") != null) {
  signUp = JSON.parse(localStorage.getItem("signup"));
}

nameIdInput.addEventListener("input", function () {
  validation(nameIdInput);
});
emailIdInput.addEventListener("input", function () {
  validation(emailIdInput);
});
passwordIdInput.addEventListener("input", function () {
  validation(passwordIdInput);
});
btnIdInput.addEventListener("click", function () {
  addUser();
});

var regex = {
  nameId: /^\w+$/,
  emailId: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  passwordId: /^.+$/,
};

function addUser() {
  if (
    validation(nameIdInput) &&
    validation(emailIdInput) &&
    validation(passwordIdInput)
  ) {
    let emailExists = false;

    for (var i = 0; i < signUp.length; i++) {
      if (signUp[i].email === emailIdInput.value) {
        emailExists = true;
        break;
      }
    }

    if (emailExists) {
      msgEmailAlreadyExists.classList.remove("d-none");
      success.classList.add("d-none");
    } else {
      msgEmailAlreadyExists.classList.add("d-none");
      success.classList.remove("d-none");
      var users = {
        userName: nameIdInput.value.trim(),
        email: emailIdInput.value.trim(),
        password: passwordIdInput.value,
      };
      signUp.push(users);
      localStorage.setItem("signup", JSON.stringify(signUp));
    }
  } else {
    Swal.fire({
      title: "oops!👀!",
      icon: "success",
    });
  }
}

function validation(element) {
  var text = element.value;
  if (regex[element.id].test(text)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    return true; // Return true for valid input
  } else {
    element.classList.remove("is-valid");
    element.classList.add("is-invalid");
    return false; // Return false for invalid input
  }
}
