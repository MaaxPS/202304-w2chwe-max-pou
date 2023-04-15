const startGame = (squaresList) => {
  for (let i = 0; i < 20; i++) {
    squaresList[Math.floor(Math.random() * 100)].style.backgroundColor =
      "black";
  }
};

export default startGame;
