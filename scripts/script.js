// JavaScript Document

var content1 = document.getElementById('content1')
var content2 = document.getElementById('content2')
var content2 = document.getElementById('content2')


function openTab1() {
  content1.style.display = "block"
  content2.style.display = "none"
  content3.style.display = "none"
}

function openTab2() {
  content2.style.display = "block"
  content1.style.display = "none"
  content3.style.display = "none"
}

function openTab3() {
  content3.style.display = "block"
  content1.style.display = "none"
  content2.style.display = "none"
}

function changeImage() {
  document.getElementById('changeIMG').src = "imgages/blazer2.jpg";
}
