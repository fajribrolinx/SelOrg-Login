function showSignup() {
  let signUp = document.getElementById("signup");
  let login = document.getElementById("login");
  if (signUp.style.display === "block") {
    signUp.style.display = "none";
    login.style.display = "block";
  } else {
    signUp.style.display = "block";
    login.style.display = "none";
  }
}
function showLogin() {
  let signUp = document.getElementById("signup");
  let login = document.getElementById("login");
  if (login.style.display === "block") {
    login.style.display = "none";
    signup.style.display = "block";
  } else {
    login.style.display = "block";
    signup.style.display = "none";
  }
}
