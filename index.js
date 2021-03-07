let userClickedPattern = [];
let gamePattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];
let randomChosenColor = buttonColors[nextSequence()];

function nextSequence() {
  let randomNumber = null;
  randomNumber = Math.round(Math.random() * 3);
  return randomNumber;
}

function addRandomColorToGame() {
  gamePattern.push(`${randomChosenColor}`);
}
addRandomColorToGame();
let audio = new Audio(`sounds/${randomChosenColor}.mp3`);

$(".btn").click(function (event) {
  let userChosenColor = null;
  userChosenColor = event.currentTarget.classList[1];
  userClickedPattern.push(userChosenColor);
});

$(`#${randomChosenColor}`).click(function () {
  $(`#${randomChosenColor}`).fadeOut(50);
  $(`#${randomChosenColor}`).fadeIn(50);
  audio.play();
});
