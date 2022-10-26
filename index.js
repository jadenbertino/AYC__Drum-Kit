const TOM1 = new Audio("./sounds/tom-1.mp3");
const TOM2 = new Audio("./sounds/tom-2.mp3");
const TOM3 = new Audio("./sounds/tom-3.mp3");
const TOM4 = new Audio("./sounds/tom-4.mp3");
const KICK = new Audio("./sounds/kick.mp3");
const SNARE = new Audio("./sounds/snare.mp3");
const CRASH = new Audio("./sounds/crash.mp3");

let buttons = document.querySelectorAll(".drum")
for (let btn of buttons) {
  btn.addEventListener("click", function () {
    switch (this.id) {
      case "tom1":
        TOM1.play();
        break;
      case "tom2":
        TOM2.play();
        break;
      case "tom3":
        TOM3.play();
        break;
      case "tom4":
        TOM4.play();
        break;
      case "kick":
        KICK.play();
        break;
      case "snare":
        SNARE.play();
        break;
      case "crash":
        CRASH.play();
        break;
    }
  });
}