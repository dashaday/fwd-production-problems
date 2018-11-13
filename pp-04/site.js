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
    // Sound icon
    var icon = document.querySelector('#sound-icon');

    // Doorbell audio
    var bellAudio = new Audio('media/doorbell.mp3');
    var audioDuration = bellAudio.duration;

    // Hide audio player
    player.classList.replace("visible","not-visible");
    // Show clickable button
    doorbell.classList.replace("not-visible","visible");

    function hideIcon() {
      icon.classList.replace("visible","not-visible");
    }

    function buttonClicked() {
      bellAudio.play();
      icon.classList.replace("not-visible","visible");
      setTimeout(hideIcon, 2000);
    }

    // Listen for click events on the doorbell
    doorbell.addEventListener('click', function() {
      buttonClicked();
    });

    doorbell.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        buttonClicked();
      }
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'd') {
        buttonClicked();
      }
    });

  });

})();
