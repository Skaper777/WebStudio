'use strict';

(function () {
  var menuOpenButton = document.querySelector('.mobile-nav__toggle');
  var menu = document.querySelector('.mobile-nav__list');
  var menuCloseButton = document.querySelector('.mobile-nav__cross-button');
  
  var menuOpen = function () {
    menu.style.display = 'block';
    menuOpenButton.removeEventListener('click', menuOpen);
    menuOpenButton.addEventListener('click', menuClose);
  };
  
  var menuClose = function () {
    menu.style.display = 'none';
    menuOpenButton.removeEventListener('click', menuClose);
    menuOpenButton.addEventListener('click', menuOpen);
  };
  
  menuOpenButton.addEventListener('click', menuOpen);
  menuCloseButton.addEventListener('click', menuClose);
})();


