import startGame from "./functions/startGame.js";

const allSquares = Array.from(document.querySelectorAll("td"));

const button = document.querySelector(".start");
button.addEventListener("click", () => {
  startGame(allSquares);
});
