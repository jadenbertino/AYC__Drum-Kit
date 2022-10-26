const TOM1 = new Audio("./sounds/tom-1.mp3");
const TOM2 = new Audio("./sounds/tom-2.mp3");
const TOM3 = new Audio("./sounds/tom-3.mp3");
const TOM4 = new Audio("./sounds/tom-4.mp3");
const KICK = new Audio("./sounds/kick.mp3");
const SNARE = new Audio("./sounds/snare.mp3");
const CRASH = new Audio("./sounds/crash.mp3");

// play sound
function makeSound(key) {
  switch (key) {
    case "a":
      TOM1.play();
      break;
    case "s":
      TOM2.play();
      break;
    case "d":
      TOM3.play();
      break;
    case "f":
      TOM4.play();
      break;
    case "j":
      KICK.play();
      break;
    case "k":
      SNARE.play();
      break;
    case "l":
      CRASH.play();
      break;
    default:
      console.log(this.id);
      break;
  }
  buttonAnimation(key);
}

// button press animation
function buttonAnimation(key) {
  let btn = document.querySelector("." + key);
  btn.classList.add("pressed");
  setTimeout(function() {
    btn.classList.remove("pressed");
  }, 100);
}

// mouse click
let buttons = document.querySelectorAll(".drum")
for (let btn of buttons) {
  btn.addEventListener("click", function() {
    makeSound(btn.classList[0])
  });
}

// keyboard
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
})


