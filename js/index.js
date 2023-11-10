let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(x) {
  showSlides(slideIndex += x);
}

// image controls
function currentSlide(x) {
  showSlides(slideIndex = x);
}

function showSlides(x) {
  let i;
  let slides = document.getElementsByClassName("slide-show");
  let dots = document.getElementsByClassName("dot");
  if (x > slides.length) {slideIndex = 1}
  if (x < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}