const gameBoard = document.querySelector("#gameBoard");
const info = document.querySelector("#info");

const startCells = ["", "", "", "", "", "", "", "", ""];

let go = "circle";
info.textContent = "circle goes first";

function createGameBoard() {
  startCells.forEach((_cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square");
    cellElement.id = index;
    cellElement.addEventListener("click", addGo);
    gameBoard.append(cellElement);
  });
}

createGameBoard();

function addGo(e) {
  console.log(e.target);
  const Display = document.createElement("div");
  Display.classList.add(go);
  e.target.appendChild(Display);
  go = go === "circle" ? "cross" : "circle";
  info.textContent = "Its now " + go + "'s turn";
  e.target.removeEventListener("click", addGo);
  checkScore();
}

function checkScore() {
  const allSquares = document.querySelectorAll(".square");
  console.log(allSquares);
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winningCombos.forEach((array) => {
    const circleWins = array.every((cell) =>
      allSquares[cell].firstChild?.classList.contains("circle")
    );
    if (circleWins) {
      info.textContent = "circle wins";
      allSquares.forEach((square) =>
        square.replaceWith(square.cloneNode(true))
      );
      return;
    }
  });

  winningCombos.forEach((array) => {
    const crossWins = array.every((cell) =>
      allSquares[cell].firstChild?.classList.contains("cross")
    );
    if (crossWins) {
      info.textContent = "cross wins";
      allSquares.forEach((square) =>
        square.replaceWith(square.cloneNode(true))
      );
      return;
    }
  });
}
