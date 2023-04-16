import nextGeneration from "./functions/nextGeneration.js";
import startGame from "./functions/startGame.js";

const squares = Array.from(document.querySelectorAll("td"));
let squaresLife = [];
for (let i = 0; i < 100; i++) {
  squaresLife.push(false);
}

const button = document.querySelector(".start");
button.addEventListener("click", () => {
  startGame(squares, squaresLife);
  setInterval(() => {
    squaresLife = nextGeneration(squares, squaresLife);
  }, 1000);
});
