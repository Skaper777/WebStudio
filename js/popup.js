'use strict';

(function () {
  var overlays = document.querySelectorAll('.slider__slide-overlay');
  var overlayPopups = document.querySelectorAll('.popup__image');  

  /*var closePopup = function () {
    overlayPopups[i].style = 'display: none';
  };*/
  
  var openPopup = function () {
    for (var i = 0; i < overlayPopups.length; i++) {
      if ()
      overlayPopups[i].style = 'display: block';
      //overlayPopups[i].addEventListener('click', closePopup);      
    }  
  };

  for (var j = 0; j < overlays.length; j++) {         
    overlays[j].addEventListener('click', openPopup);    
  }  
})();