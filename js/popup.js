'use strict';

(function () {
  var overlays = document.querySelectorAll('.slider__slide-overlay');
  var overlayPopups = document.querySelectorAll('.popup__image');   
  
  var openPopup = function (e) {    
    var overlay = e.target;    
    for (var i = 0; i < overlays.length; i++) {
      if (overlay === overlays[i]) {
        overlayPopups[i].style = 'display: block';
      }
    }
  };  

  var closePopup = function (e) {
    var overlayPopup = e.target;    
    for (var i = 0; i < overlayPopups.length; i++) {
      if (overlayPopup === overlayPopups[i]) {
        overlayPopups[i].style = 'display: none';
      }
    }
  }; 
  
  var popupHandler = function () {
    for (var j = 0; j < overlays.length; j++) {         
      overlays[j].addEventListener('click', openPopup);
      overlayPopups[j].addEventListener('click', closePopup);    
    }
  };

  popupHandler();
})();