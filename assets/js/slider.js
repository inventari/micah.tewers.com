activateAllSlideshows();

function findAncestor (el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}

function plusSlides(id, n) {
  id = findAncestor(id, "slideshow-container").id;
  n = parseInt(document.getElementById(id).getElementsByClassName("counter")[0].value) + n;
  showSlides(id, n);
}

function currentSlide(id, n) {
  showSlides(findAncestor(id, "slideshow-container").id, n);
}

function showSlides(id, n) {
  var slider = document.getElementById(id);
  var counter = slider.getElementsByClassName("counter")[0];
  var oldslide = counter.value - 1;
  var slides = slider.getElementsByClassName("slide");
  var dots = slider.getElementsByClassName("dot");
  
  counter.value = n;
  if (n > slides.length) {counter.value = 1} 
  if (n < 1) {counter.value = slides.length}
  
  if (oldslide > slides.length) {oldslide = 1} 
  if (oldslide < 1) {oldslide = slides.length}
  
  var i;
  for (i = 0; i < slides.length; i++) {
      //slides[i].style.display = "none"; 
      	slides[i].className = slides[i].className.replace(" old", "");
      	slides[i].className = slides[i].className.replace(" active", " old");
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  //slides[counter.value-1].style.display = "block"; 
  dots[counter.value-1].className   += " active";
  slides[counter.value-1].className += " active";
}

function activateAllSlideshows(){
  var slideshows = document.getElementsByClassName('slideshow-container');
  for (i = 0; i < slideshows.length; i++) {
    slideshows[i].getElementsByClassName("counter")[0].value = 0;
  }
  advanceSlide();
}

function advanceSlide(){

  var slideshows = document.getElementsByClassName('slideshow-container');
  for (i = 0; i < slideshows.length; i++) {
  	if (!$(slideshows[i]).is(":hover")){
    	showSlides(slideshows[i].id, parseInt(slideshows[i].getElementsByClassName("counter")[0].value) + 1);
    }
  }
  
}

window.setInterval( function() { advanceSlide(); }, 6000);
