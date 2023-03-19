let inputOne = document.querySelector("input[type = 'text']");
let inputTwo = document.querySelector("input[type = 'email']");
let inputThree = document.querySelector(".passOne");
let inputFour = document.querySelector(".passTwo");
let showBtnOne = document.querySelector(".showBtn1");
let showBtnTwo = document.querySelector(".showBtn2");
let hideBtnOne = document.querySelector(".hidebtn1");
let hideBtnTwo = document.querySelector(".hidebtn2");
let regBtn = document.querySelector(".regBtn");
let logBtn = document.querySelector(".logBtn");
let loginBtn = document.getElementById("loginBtn");
let regHereBtn = document.getElementById("regHereBtn");
let logLink = document.querySelector(".logLink");
let regLink = document.querySelector(".regLink");
let regForm = document.getElementById("regForm");
let logTime = document.getElementById("logTime");
let logEmail = document.getElementById("logEmail");
let logPass = document.getElementById("logPass");
let formSec = document.getElementById("formSec");
let logHere = document.querySelector(".logHere");

function showFuncOn() {
  showBtnOne.style.display = "block";
}

function showFuncOn() {
  showBtnOne.style.display = "block";
}

showBtnOne.addEventListener("click", showBtn1);
function showBtn1() {
  inputThree.type = "text";
  hideBtnOne.style.display = "block";
}

hideBtnOne.addEventListener("click", hideFncOne);
function hideFncOne() {
  inputThree.type = "password";
  hideBtnOne.style.display = "none";
}

//Confirm password section

function showFuncTw() {
  showBtnTwo.style.display = "block";
}

showBtnTwo.addEventListener("click", showBtn2);

function showBtn2() {
  inputFour.type = "text";
  hideBtnTwo.style.display = "block";
}

hideBtnTwo.addEventListener("click", hideFncTwo);

function hideFncTwo() {
  inputFour.type = "password";
  hideBtnTwo.style.display = "none";
}

regBtn.addEventListener("click", regFunc);

function regFunc() {
  if (inputThree.value == inputFour.value && inputThree.value !== "") {
    formSec.innerHTML = "<h1>Registration successfull</h1>";
    regBtn.style.display = "none";
    logBtn.style.display = "none";
    logLink.style.display = "none";
    logHere.style.display = "block";
  } else if (inputThree.value !== inputFour.value) {
    alert("Oops! Your Enter Password & Confirm Password is Not Match");
  } else {
    alert("Please Fill up input field");
  }
}

logHere.addEventListener("click", logHereFnc);

function logHereFnc() {
  logTime.style.display = "block";
  regForm.style.height = "400px";
  logBtn.style.display = "block";
  logHere.style.display = "none";
  formSec.innerHTML = "";
}

loginBtn.addEventListener("click", logFnc);

function logFnc() {
  inputOne.style.display = "none";
  inputThree.style.display = "none";
  inputTwo.style.display = "none";
  inputFour.style.display = "none";
  regBtn.style.display = "none";
  logBtn.style.display = "block";
  logBtn.style.textAlign = "center";
  regBtn.style.backgroundColor = "#fff";
  regLink.style.display = "block";
  logLink.style.display = "none";
  regForm.style.height = "400px";
  regForm.style.backgroundImage = "linear-gradient(to right top, #3e0a4a, #720030, #7f2a02, #685900, #197e18)";
  regForm.style.backgroundSize = "cover";
  regForm.style.backgroundRepeat = "no-repeat";
  logTime.style.display = "block";
}

logBtn.addEventListener("click", logBtnFnc);

function logBtnFnc() {
  if (
    inputTwo.value === logEmail.value &&
    inputThree.value === logPass.value &&
    inputThree.value !== ""
  ) {
    regForm.style.backgroundImage = "linear-gradient(to right top, #3e0a4a, #720030, #7f2a02, #685900, #197e18)";
    logTime.style.display = "none";
    regLink.style.display = "none";
    logBtn.style.display = "none";
    regForm.style.height = "100vh";
    regForm.style.width = "100vw";
    formSec.innerHTML = "<h2>Welcome Our Website</h2>";
  } else {
    alert("Please Confirm your Email & Password");
  }
}
