(function(){
  if (typeof(document.querySelector)==="undefined") {
    return;
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Add a js class on the <html> element...
    document.querySelector('html').className = 'js';

    // object that appears with no JavaScript
    var player = document.querySelector('#nojs-doorbell')
    // Object that appears with JavaScript
    var doorbell = document.querySelector('#doorbell');

    // Doorbell audio
    var bellAudio = new Audio('media/doorbell.mp3');

    // Hide audio player
    player.classList.replace("visible","not-visible");
    // Show clickable button
    doorbell.classList.replace("not-visible","visible");

    // Listen for click events on the doorbell
    doorbell.addEventListener('click', function() {
      bellAudio.play();
    });

  });

})();
