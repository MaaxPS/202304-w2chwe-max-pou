// eslint-disable-next-line complexity
const nextGeneration = (squares, squaresLife) => {
  const squaresLifeCopy = [];
  let neighboursAlive;
  let numberNeighboursAlive = 0;

  for (let i = 0; i < 100; i++) {
    if (i === 0) {
      neighboursAlive = [
        squaresLife[i + 1],
        squaresLife[i + 10],
        squaresLife[i + 11],
      ];

      for (let j = 0; j < 3; j++) {
        if (neighboursAlive[j]) {
          numberNeighboursAlive++;
        }
      }
    } else if (i === 9) {
      neighboursAlive = [
        squaresLife[i - 1],
        squaresLife[i + 9],
        squaresLife[i + 10],
      ];

      for (let j = 0; j < 3; j++) {
        if (neighboursAlive[j]) {
          numberNeighboursAlive++;
        }
      }
    } else if (i < 10) {
      neighboursAlive = [
        squaresLife[i - 1],
        squaresLife[i + 1],
        squaresLife[i + 9],
        squaresLife[i + 10],
        squaresLife[i + 11],
      ];

      for (let j = 0; j < 5; j++) {
        if (neighboursAlive[j]) {
          numberNeighboursAlive++;
        }
      }
    } else if (i % 10 === 0) {
      neighboursAlive = [
        squaresLife[i - 10],
        squaresLife[i - 9],
        squaresLife[i + 1],
        squaresLife[i + 10],
        squaresLife[i + 11],
      ];

      for (let j = 0; j < 5; j++) {
        if (neighboursAlive[j]) {
          numberNeighboursAlive++;
        }
      }
    } else if ((i - 9) % 10 === 0) {
      neighboursAlive = [
        squaresLife[i - 11],
        squaresLife[i - 10],
        squaresLife[i - 1],
        squaresLife[i + 9],
        squaresLife[i + 10],
      ];

      for (let j = 0; j < 5; j++) {
        if (neighboursAlive[j]) {
          numberNeighboursAlive++;
        }
      }
    } else if (i === 90) {
      neighboursAlive = [
        squaresLife[i - 10],
        squaresLife[i - 9],
        squaresLife[i + 1],
      ];

      for (let j = 0; j < 3; j++) {
        if (neighboursAlive[j]) {
          numberNeighboursAlive++;
        }
      }
    } else if (i === 99) {
      neighboursAlive = [
        squaresLife[i - 11],
        squaresLife[i - 10],
        squaresLife[i - 1],
      ];

      for (let j = 0; j < 3; j++) {
        if (neighboursAlive[j]) {
          numberNeighboursAlive++;
        }
      }
    } else if (i > 89) {
      neighboursAlive = [
        squaresLife[i - 9],
        squaresLife[i - 10],
        squaresLife[i - 11],
        squaresLife[i - 1],
        squaresLife[i + 1],
      ];

      for (let j = 0; j < 5; j++) {
        if (neighboursAlive[j]) {
          numberNeighboursAlive++;
        }
      }
    } else {
      neighboursAlive = [
        squaresLife[i - 11],
        squaresLife[i - 10],
        squaresLife[i - 9],
        squaresLife[i - 1],
        squaresLife[i + 1],
        squaresLife[i + 9],
        squaresLife[i + 10],
        squaresLife[i + 11],
      ];

      for (let j = 0; j < 8; j++) {
        if (neighboursAlive[j]) {
          numberNeighboursAlive++;
        }
      }
    }

    if (squaresLife[i]) {
      if (numberNeighboursAlive === 3 || numberNeighboursAlive === 2) {
        squaresLifeCopy.push(true);
      } else if (numberNeighboursAlive < 2 || numberNeighboursAlive > 3) {
        squaresLifeCopy.push(false);
      }
    } else if (!squaresLife[i]) {
      if (numberNeighboursAlive === 3) {
        squaresLifeCopy.push(true);
      } else if (numberNeighboursAlive !== 3) {
        squaresLifeCopy.push(false);
      }
    }

    numberNeighboursAlive = 0;
  }

  squaresLife = [...squaresLifeCopy];

  for (let i = 0; i < 100; i++) {
    if (squaresLife[i]) {
      squares[i].style.backgroundColor = "black";
    } else if (!squaresLife[i]) {
      squares[i].style.backgroundColor = "white";
    }
  }

  return squaresLife;
};

export default nextGeneration;
