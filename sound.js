var buttons = document.querySelectorAll(".MU");
var currentSound = null;

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", handleClick);
  /*buttons[i].addEventListener("keypress", handleKeyPress);*/
}
document.addEventListener("keypress", function(event) {
    var key = event.key.toLowerCase();
    playSound(key);
    addAnimation(key);
  });
  


function handleClick() {
    var buttonInnerHTML = this.innerHTML.toLowerCase();
    playSound(buttonInnerHTML);
    addAnimation(buttonInnerHTML);
  }
  
  

  function playSound(key) {
    var sound;

    switch (key) {
      case "primer":
        sound = new Audio("smooth-vibe-music-loop-alternate-95804.mp3");
        break;
      case "foundation":
        sound = new Audio("futuristic-logo-3-versions-149429.mp3");
        break;
        case "facepowder":
        sound = new Audio("chonology-of-love-6094.mp3");
        break;
        case "eyeshadow":
        sound = new Audio("bubbles-14830.mp3");
        break;
        case "mascara":
        sound = new Audio("put-mascara-on-27822.mp3");
        break;
        case "lipstick":
        sound = new Audio("saber-hummingwav-14651.mp3");
        break;
        case "blush":
        sound = new Audio("funny-and-comical-melody-glide-synth-bass-and-trumpet-21398.mp3");
        break;
        case "highlighter":
        sound = new Audio("lets-dance-126506.mp3");
        break;
      // Add more cases for other buttons
      // ...  
    }

    if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0;
    }
    
    if (sound) {
        sound.play();
        currentSound = sound;
      }
  }

  function addAnimation(key) {
    var activeButton = document.querySelector("." + key);
    if (activeButton) {
        activeButton.classList.add("pressed");
  
      setTimeout(function () {
        activeButton.classList.remove("pressed");
      }, 100);
    }
}
  
