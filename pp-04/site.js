(function(){
  if (typeof(document.querySelector)==="undefined") {
    return;
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Add a js class on the <html> element...
    document.querySelector('html').className = 'js';

    var doorbell = document.querySelector('#doorbell');
    var bellAudio = new Audio('media/doorbell.mp3');
    // Listen for click events on the doorbell
    doorbell.addEventListener('click', function() {
      bellAudio.play();
    });

  });

})();
