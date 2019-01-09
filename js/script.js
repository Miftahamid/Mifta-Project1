 

let  card = document.getElementById('card');

document.getElementById('flip').addEventListener('click', function() {
    card.classList.toggle('flipped');
}, false);

function toggle_visibility(card) {
    var e = document.getElementById(card);
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
 }

 var question= 1;
 showSlides(question);

function plusSlides(n) {
  showSlides(question += n);
}

function currentSlide(n) {
  showSlides(question = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}