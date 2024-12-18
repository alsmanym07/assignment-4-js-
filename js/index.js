var emailIdInput = document.getElementById("emailId");
var passwordIdInput = document.getElementById("passwordId");
var btnIdInput = document.getElementById("btnId");
var msgAllInputs = document.getElementById("allInputs");
var msgIncorrectPassword = document.getElementById("incorrectPassword");
var success = document.getElementById("successId");

var signUp = [];

// Load signUp data from localStorage
if (localStorage.getItem("signup") != null) {
  signUp = JSON.parse(localStorage.getItem("signup"));
}

// Validation for email and password inputs
emailIdInput.addEventListener("input", function () {
  validation(emailIdInput);
});
passwordIdInput.addEventListener("input", function () {
  validation(passwordIdInput);
});

btnIdInput.addEventListener("click", function () {
  loginUser();
});

var regex = {
  emailId: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  passwordId: /^.+$/,
};

function loginUser() {
  if (validation(emailIdInput) && validation(passwordIdInput)) {
    let emailExists = false;
    let userIndex;

    // Check if the email exists and store the index of the user
    for (var i = 0; i < signUp.length; i++) {
      if (signUp[i].email === emailIdInput.value) {
        emailExists = true;
        userIndex = i;
        break;
      }
    }

    // If email exists, check the password
    if (emailExists == true) {
      if (signUp[userIndex].password === passwordIdInput.value) {
        success.classList.remove("d-none");
        msgIncorrectPassword.classList.add("d-none");
        msgAllInputs.classList.add("d-none");
        var userNameToStore = signUp[userIndex].userName;
        console.log(signUp[userIndex].name);

        localStorage.setItem("userName", userNameToStore);
        window.location.href = "./home.html";
      } else {
        msgIncorrectPassword.classList.remove("d-none");
        msgAllInputs.classList.add("d-none");

        success.classList.add("d-none");
      }
    } else {
      msgIncorrectPassword.classList.remove("d-none");
      msgAllInputs.classList.add("d-none");
      success.classList.add("d-none");
    }
  } else {
    msgAllInputs.classList.remove("d-none");
    msgIncorrectPassword.classList.add("d-none");
    success.classList.add("d-none");
  }
}

function validation(element) {
  var text = element.value;
  if (regex[element.id].test(text)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    return true;
  } else {
    element.classList.remove("is-valid");
    element.classList.add("is-invalid");
    return false;
  }
}
