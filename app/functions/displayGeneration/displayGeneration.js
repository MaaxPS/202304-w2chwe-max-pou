const displayGeneration = (squares, squaresLife) => {
  for (let i = 0; i < 100; i++) {
    if (squaresLife[i]) {
      squares[i].style.backgroundColor = "black";
    } else if (!squaresLife[i]) {
      squares[i].style.backgroundColor = "white";
    }
  }
};

export default displayGeneration;
