let nameInput = document.getElementById("nameInput");
let signEmailInput = document.getElementById("signEmailInput");
let signPassInput = document.getElementById("signPassInput");
let logInEmail = document.getElementById("logInEmail");
let passInput = document.getElementById("passInput");
let logInButton = document.getElementById("logInButton");
let list = [];
let myAlert = document.querySelector(".alert");


if (localStorage.getItem("userContainer") !== null) {
  list = JSON.parse(localStorage.getItem("userContainer"));
}
logInButton.addEventListener("click", function () {
  allUsers();
if (nameValidation()==true&&passValidation===true&&emailValidation===true) {
  location.href="main.html"
}


  if(nameInput.value === "" | signEmailInput.value === "" | signPassInput.value === ""){

    myAlert.classList.remove("d-none")
    
    }

});

function allUsers() {
  var user = {
    name: nameInput.value,
    email: signEmailInput.value,
    password: signPassInput.value,
  };

  list.push(user);
  localStorage.setItem("userContainer", JSON.stringify(list));

  clearInputs();
}

function clearInputs() {
  nameInput.value = null;
  signEmailInput.value = null;
  signPassInput.value = null;
}

if (nameInput) {
  nameInput.addEventListener("keyup", function () {
    nameValidation();
  });
}
if (signEmailInput) {
  signEmailInput.addEventListener("keyup", function () {
    emailValidation();
  });
}
if (passInput) {
  passInput.addEventListener("keyup", function () {
    passValidation();
  });
}

function nameValidation() {
  var regex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{1,50}$/;

  var text = nameInput.value;

  if (regex.test(text)) {
    nameInput.classList.add("is-valid");
    nameInput.classList.remove("is-invalid");
  } else {
    nameInput.classList.remove("is-valid");
    nameInput.classList.add("is-invalid");
  }
}
function emailValidation() {
  var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  var text = signEmailInput.value;

  if (regex.test(text)) {
    signEmailInput.classList.add("is-valid");
    signEmailInput.classList.remove("is-invalid");
  } else {
    signEmailInput.classList.remove("is-valid");
    signEmailInput.classList.add("is-invalid");
  }
}
function passValidation() {
  var regex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  var text = passInput.value;

  if (regex.test(text)) {
    passInput.classList.add("is-valid");
    passInput.classList.remove("is-invalid");
  } else {
    passInput.classList.remove("is-valid");
    passInput.classList.add("is-invalid");
  }
}
