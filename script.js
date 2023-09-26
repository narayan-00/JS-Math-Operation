var f_num = document.getElementById("a");
let s_num = document.getElementById("b");

let add = document.getElementById("plus");
let sub = document.getElementById("minus");
let mult = document.getElementById("mul");
let divison = document.getElementById("div");

let display = document.getElementById("display");
let clc = document.getElementById("clr");

clc.addEventListener("click", function () {
  display.innerText = "";
  f_num.value = "";
  s_num.value = "";
});

add.addEventListener("click", function () {
  var a = parseFloat(f_num.value);
  var b = parseFloat(s_num.value);
  if (isNaN(a) || isNaN(b)) {
    alert("Please give input as a number only");
  } else display.innerText = a + b;
});

sub.addEventListener("click", function () {
  var a = parseFloat(f_num.value);
  var b = parseFloat(s_num.value);
  if (isNaN(a) || isNaN(b)) {
    alert("Please give input as a number only");
  } else display.innerText = a - b;
});

mult.addEventListener("click", function () {
  var a = parseFloat(f_num.value);
  var b = parseFloat(s_num.value);
  if (isNaN(a) || isNaN(b)) {
    alert("Please give input as a number only");
  } else display.innerText = a * b;
});

divison.addEventListener("click", function () {
  var a = parseFloat(f_num.value);
  var b = parseFloat(s_num.value);
  if (isNaN(a) || isNaN(b)) {
    alert("Please give input as a number only");
  } else display.innerText = a / b;
});
