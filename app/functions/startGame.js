const startGame = (squares, squaresLife) => {
  let randomNumber;
  for (let i = 0; i < 20; i++) {
    randomNumber = Math.floor(Math.random() * 100);
    squares[randomNumber].style.backgroundColor = "black";
    squaresLife[randomNumber] = true;
  }
};

export default startGame;
