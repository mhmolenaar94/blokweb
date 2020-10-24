// JavaScript Document

var content1 = document.getElementById('content1')
var content2 = document.getElementById('content2')
var content2 = document.getElementById('content2')
var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn3')
var btn3 = document.getElementById('btn3')

function openHTML() {
  content1.style.transform = "translateX(0)";
  content2.style.transform = "translateX(100%)";
  content3.style.transform = "translateX(100%)";
  btn1.style.color = "#222";
  btn2.style.color = "rgb(114, 114, 114)";
  btn3.style.color = "rgb(114, 114, 114)";
}

function openCSS() {
  content1.style.transform = "translateX(100%)";
  content2.style.transform = "translateX(0)";
  content3.style.transform = "translateX(100%)";
  btn2.style.color = "#222";
  btn1.style.color = "rgb(114, 114, 114)";
  btn3.style.color = "rgb(114, 114, 114)";
}

function openJS() {
  content1.style.transform = "translateX(100%)";
  content2.style.transform = "translateX(100%)";
  content3.style.transform = "translateX(0)";
  btn3.style.color = "#222";
  btn2.style.color = "rgb(114, 114, 114)";
  btn1.style.color = "rgb(114, 114, 114)";
}


