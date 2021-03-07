let userClickedPattern = [];
let gamePattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
  let randomNumber = Math.round(Math.random() * 3);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $(`#${randomChosenColor}`).click(function () {
    $(`#${randomChosenColor}`).fadeOut(80);
    $(`#${randomChosenColor}`).fadeIn(80);
    let audio = new Audio(`sounds/${randomChosenColor}.mp3`);
    audio.play();
  });
}
function playSound(name) {
  let color = `.${name}`;
  $(color).fadeOut(80);
  $(color).fadeIn(80);
  let audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}
function animatePress(currentColor) {
  let button = `.btn.${currentColor}`;
  $(button).addClass("pressed");
  setTimeout(function () {
    $(button).removeClass("pressed");
  }, 200);
}

$(".btn").click(function (event) {
  let userChosenColor = null;
  userChosenColor = event.currentTarget.classList[1];
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
});

$(document).keypress(nextSequence());
