'use strict';

(function () {
  var buttonLeft = document.querySelector('.works__controls-left');
  var buttonRight = document.querySelector('.works__controls-right');
  
  var slides = document.querySelectorAll('.slider__slide');
  var currentSlide = 0;
  
  var buttonRightHandler = function () {
    if (currentSlide < slides.length - 1) {     
      slides[currentSlide].classList.remove('showing');           
      currentSlide += 1;
      slides[currentSlide].classList.add('showing');      
    }  
  };
  
  var buttonLeftHandler = function () {  
    if (currentSlide > 0) {    
      slides[currentSlide].classList.remove('showing');      
      currentSlide -= 1;
      slides[currentSlide].classList.add('showing');             
    }  
  };
  
  buttonRight.addEventListener('click', buttonRightHandler);
  buttonLeft.addEventListener('click', buttonLeftHandler);
})();
