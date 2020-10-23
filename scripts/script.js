// JavaScript Document
var deSter

deSter = document.querySelector("boxster")
deSter.addEventListener("click", veranderMezelf);

function veranderMezelf() {
  deSter.classList.add("boxsterclosed");
}