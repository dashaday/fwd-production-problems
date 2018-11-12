(function(){
  if (typeof(document.querySelector)==="undefined") {
    return;
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Add a js class on the <html> element...
    document.querySelector('html').className = 'js';

    var doorbell = document.querySelector('#doorbell');
    var bellAudio = new Audio('media/doorbell.mp3');
    var player = document.querySelector('#nojs-doorbell')

    // Show button if JavaScript is working
    player.classList.replace("visible","not-visible");
    doorbell.classList.replace("not-visible","visible");

    // Listen for click events on the doorbell
    doorbell.addEventListener('click', function() {
      bellAudio.play();
    });

  });

})();
