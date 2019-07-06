var status = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("content");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  status++;
  if (status  > slides.length) {status = 1} 
  slides[status -1].style.display = "block"; 
  setTimeout(showSlides, 4000); 
}
var status12 = 0;
showSlides1();

function showSlides1() {
  var slide = document.getElementsByClassName("content1");
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none"; 
  }
  status12++;
  if (status12  > slide.length) {status12 = 1} 
  slide[status12 -1].style.display = "block"; 
  setTimeout(showSlides1, 6000); 
}
const Hello = document.querySelector('.nav_check')
const bye = document.querySelector('.container')


