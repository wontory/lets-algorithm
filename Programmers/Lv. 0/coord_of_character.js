function solution(keyinput, board) {
  return keyinput.reduce(
    (acc, input) => {
      switch (input) {
        case 'up':
          acc[1] < (board[1] - 1) / 2 && acc[1]++;
          break;
        case 'down':
          acc[1] > (1 - board[1]) / 2 && acc[1]--;
          break;
        case 'left':
          acc[0] > (1 - board[0]) / 2 && acc[0]--;
          break;
        case 'right':
          acc[0] < (board[0] - 1) / 2 && acc[0]++;
          break;
      }

      return acc;
    },
    [0, 0]
  );
}
