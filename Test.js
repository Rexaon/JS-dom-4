var slideIndex = 0;
vis_slider();


function vis_slider() {
  var i;
  var slides = document.getElementsByClassName("slider");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(vis_slider, 3000);
}