function solution(board) {
  const n = board.length;
  const near = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  board.forEach((row, rindex) => {
    row.forEach((cell, cindex) => {
      cell === 1 &&
        near.forEach(([x, y]) => {
          [x, y] = [x + rindex, y + cindex];
          if (x >= 0 && x < n && y >= 0 && y < n && board[x][y] === 0)
            board[x][y] = 2;
        });
    });
  });

  return board.reduce((acc, v) => acc + v.filter((v) => !v).length, 0);
}
