let level = 0;
let userClickedPattern = [];
let gamePattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];
let userChosenColor = null;

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("h1").html(`Level ${level}`);
  let randomNumber = Math.round(Math.random() * 3);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $(`#${randomChosenColor}`).fadeOut(80);
  $(`#${randomChosenColor}`).fadeIn(80);
  playSound(randomChosenColor);
}

function playSound(name) {
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
function checkAnswer(currentLevel) {
  let i = userClickedPattern.length - 1;
  if (gamePattern[i] === userClickedPattern[i]) {
    console.log("success");
    if (gamePattern.length === userClickedPattern.length) {
      debugger;
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    let wrong = new Audio("sounds/wrong.mp3");
    wrong.play();
    $("h1").html("Game Over ! Press any key to Restart");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
  }
}

$(document).one("keypress", function () {
  nextSequence();
  $("h1").html(`Level ${currentLevel}`);
});

$(".btn").click(function (event) {
  userChosenColor = event.currentTarget.classList[1];
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(level);
});
