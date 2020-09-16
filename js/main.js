
var slideIndex = 1;

function plusSlides(n){
  showSlides(slideIndex += n);
}

function currentSlide(n){
  showSlides(slideIndex = n);
}


function showSlides(n){

  var slides = document.getElementsByClassName("my-slides");
  var dots = document.getElementsByClassName("dot");

// resets it to end node
  if (n < 1) {
    slideIndex = slides.length;
  }

// resets it to first node
if (n > slides.length) {
  slideIndex = 1;
}

for (i=0; i<slides.length; i++) {
    slides[i].style.display = "none";
  }

var dotContainer = document.getElementById('dotcontainer');

htmlBuilder = '<div style="text-align:center">';
for (i=0; i<slides.length; i++) {
    slides[i].style.display = "none";
    htmlBuilder += '<span class="dot" onclick="currentSlide(slideIndex)"> + </span>';
  }
htmlBuilder += '</div>';
dotContainer.innerHTML=htmlBuilder;

for (i=0; i<dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}

showSlides(slideIndex);
