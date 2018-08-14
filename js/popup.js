'use strict';

(function () {
  var overlays = document.querySelectorAll('.slider__slide-overlay');
  var popup = document.querySelector('.popup');
  var popupImages = document.querySelectorAll('.popup__image');
  var popupClose = document.querySelector('.popup__close');       
  
  var openPopup = function (e) {    
    var overlay = e.target;    
    for (var i = 0; i < overlays.length; i++) {
      if (overlay === overlays[i]) {
        popup.style = 'display: block';        
        popupImages[i].style = 'display: block';
      } else {
        popupImages[i].style = 'display: none';
      }
    }
  };  

  var closePopup = function () {    
    popup.style = 'display: none';   
  }; 
  
  var popupHandler = function () {
    for (var j = 0; j < overlays.length; j++) {         
      overlays[j].addEventListener('click', openPopup);          
    }
  };

  popupClose.addEventListener('click', closePopup);
  popupHandler();
})();