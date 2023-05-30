import { diagonals } from "./matrixOperations";

export function checkWinRow(newBoard, mapSizeY) {
  let allRow = "";
  let row = "";
  for (let i = 0; i < mapSizeY; i++) {
    row = newBoard[i].join();
    allRow = allRow + "_" + row;
  }
  checkWinFinal(allRow);
}

export function checkWinDiagonal(newBoard, mapSizeY, mapSizeX) {
  let diagonalRows = null;
  let allRow = "";
  let row = "";
  for (let i = 4; i < mapSizeY - 4; i++) {
    for (let j = 0; j < mapSizeX; j++) {
      diagonalRows = diagonals(newBoard, i, j, mapSizeX);
      row = diagonalRows[0].join() + diagonalRows[1].join();
      allRow = allRow + "_" + row;
    }
  }
  checkWinFinal(allRow);
}

export function checkWinFinal(allRow) {
  allRow = allRow.replaceAll(",", "");
  let lastChar = "";
  let occurences = 0;
  for (let i = 0; i < allRow.length; i++) {
    if (allRow.charAt(i) === "_") {
      lastChar = "";
      occurences = 0;
      continue;
    }
    if (allRow.charAt(i) === lastChar) {
      occurences++;
    } else {
      lastChar = allRow.charAt(i);
      occurences = 1;
    }
    if (occurences === 5) {
      console.log("gg");
      break;
    }
  }
}
