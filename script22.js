"use strict";

/*

1. Variabli za site DOM elementi sto ke se koristat.
2. Too high or too low message
3. Correct number message and green background when number is correct, disable Check button
4. Again button activation

*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const message = document.querySelector(".message");
let score = 20;
document.querySelector(".score").textContent = score;

let highscore = 0;

checkBtn.addEventListener("click", function () {
  let guessNumber = Number(document.querySelector(".guess").value);

  if (score > 1) {
    if (guessNumber !== 0) {
      score--;
      document.querySelector(".score").textContent = score;

      if (guessNumber === secretNumber) {
        message.textContent = `Correct Number !!!`;
        document.querySelector("body").classList.add("body-winner");
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = secretNumber;
        checkBtn.disabled = true;
        if (score > highscore) {
          highscore = score;
          document.querySelector(".highscore").textContent = highscore;
        } else {
          highscore = highscore;
          document.querySelector(".highscore").textContent = highscore;
        }
      } else if (guessNumber < secretNumber) {
        message.textContent = `Too low!`;
      } else {
        message.textContent = "Too high!";
      }
    } else {
      message.textContent = "0 is not a number";
    }
  } else {
    document.querySelector(".score").textContent = 0;
    message.textContent = "You Lose!";

    checkBtn.disabled = true;
  }
});

againBtn.addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".guess").value = "";
  checkBtn.disabled = false;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = "?";
});
document.querySelector("body").backgroundColor = "red";
