'use strict';

(function () {
  var URL = 'https://js.dump.academy/keksobooking';
  var form = document.querySelector('form');

  var request = function (onLoad) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } 
    });    

    return xhr;
  };

  window.backend = {
    upload: function (data, onLoad) {
      var xhr = request(onLoad);

      xhr.open('POST', URL);
      xhr.send(data);
    }
  };

  window.onSuccessHandler = function (evt) {    
    window.backend.upload(new FormData(form), function() {
      var message = document.querySelector('.success-message');
      message.style.display = 'fixed';
    });

    evt.preventDefault();
  }

  var button = document.querySelector('.form__button'); 
  
  button.addEventListener('submit', window.onSuccessHandler);
})();