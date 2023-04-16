import displayGeneration from "./functions/displayGeneration/displayGeneration.js";
import nextGeneration from "./functions/nextGeneration/nextGeneration.js";
import startGame from "./functions/startGame/startGame.js";

const squares = Array.from(document.querySelectorAll("td"));
let squaresLife = [];
for (let i = 0; i < 100; i++) {
  squaresLife.push(false);
}

let interval;
const button = document.querySelector(".start");

button.addEventListener("click", () => {
  startGame(squares, squaresLife);
  clearInterval(interval);
  interval = setInterval(() => {
    squaresLife = nextGeneration(squaresLife);
    displayGeneration(squares, squaresLife);
  }, 1000);
});
