var userNameElement = document.getElementById("userName");
var logoutBtn = document.getElementById("logoutBtn");

// Retrieve the username from localStorage
if (localStorage.getItem("userName") !== null) {
  userNameElement.innerHTML = `Welcome ${localStorage.getItem("userName")}`;
}

logoutBtn.addEventListener("click", function () {
  localStorage.removeItem("userName");

  window.location.href = "./index.html";
  //   window.history.back();
  // window.history.replaceState("./../index.html");
});
