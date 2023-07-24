"use strict";

let a = Math.ceil(Math.random() * 10);
let b = Math.ceil(Math.random() * 10);
let c = a + b;

function GenerarCaptcha() {
  let hidden = document.getElementById("verificacionOculto");
  let inputField = document.getElementById("entradaVerificacion");
  let muestra = document.getElementById("muestraVerificacion");
  muestra.innerHTML = a + " + " + b + " = ";
  hidden.value = c;
}

function ValidarCaptcha() {
  let inputField = document.getElementById("entradaVerificacion");
  if (inputField.value == c) return true;
  else {
    inputField.style.color = "red";
    return false;
  }
}
GenerarCaptcha();
