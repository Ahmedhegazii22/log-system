let emailInput = document.getElementById("emailInput");
let signEmailInput = document.getElementById("signEmailInput");
let signPassInput = document.getElementById("signPassInput");
let passInput = document.getElementById("passInput");
let logInButton = document.getElementById("logInButton");
let myAlert = document.querySelector(".alert");
let list = [];

if (localStorage.getItem("userContainer") !== null) {
  list = JSON.parse(localStorage.getItem("userContainer"));
}

console.log(list);
function check() {
  var email = emailInput.value;
  var pass = passInput.value;
  for (let i = 0; i < list.length; i++) {
    if (email = list[i].email &&pass===list[i].password) {
      location.href="main.html"
    }
    else{
      myAlert.classList.remove("d-none")
    }
  }
}

if (logInButton) {
  logInButton.addEventListener("click"  , function(){

    check()

  } )
}

