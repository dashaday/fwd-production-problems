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

    // Hide audio player
    player.classList.replace("visible","not-visible");
    // Show clickable button
    doorbell.classList.replace("not-visible","visible");

    // Plays audio, shows sound image
    function buttonClicked() {
      bellAudio.play();
      icon.classList.replace("not-visible","visible");
      setTimeout(hideIcon, 2000);
    }

    // Hides sound icon after 2 seconds (audio duration)
    function hideIcon() {
      icon.classList.replace("visible","not-visible");
    }

    // Listen for click events on the doorbell
    doorbell.addEventListener('click', function() {
      buttonClicked();
    });

    // Play audio when button is selected through tab and 'Enter' is pressed
    doorbell.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        buttonClicked();
      }
    });

    // Play audio when 'd' is pressed anywhere on the viewport
    document.addEventListener('keydown', function(e) {
      if (e.key === 'd') {
        buttonClicked();
      }
    });
  });
})();
