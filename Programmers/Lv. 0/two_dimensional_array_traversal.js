const solution = (board, k) =>
  board.reduce(
    (acc1, arr, id1) =>
      acc1 +
      arr.reduce((acc2, num, id2) => (id1 + id2 <= k ? acc2 + num : acc2), 0),
    0
  );
