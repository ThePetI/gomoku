export function transpose(board) {
  return board[0].map((col, c) => board.map((row, r) => board[r][c]));
}

export function diagonals(matrix, cellX, cellY, mapSizeX) {
  const forward = []; // diagonal according forward slash shape: /
  const backward = []; // diagonal according backslash shape: \
  matrix.forEach((row, y) => {
    let x = cellX - (cellY - y);
    if (x >= 0 && x < mapSizeX) backward.push(row[x]);
    x = cellX + (cellY - y);
    if (x >= 0 && x < mapSizeX) forward.push(row[x]);
  });
  return [forward, backward];
}
