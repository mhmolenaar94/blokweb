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

function toggleImage() {
  var img1 = "images/1x/starClosed.png";
  var img2 = "images/1x/Staropen.png";
  
  var imgElement = document.getElementById('toggleImage');

  imgElement.src = (imgElement.src === img1)? img2 : img1;
}
