const solution = (n) => {
  const result = Array.from({ length: n }, () => new Array(n).fill(0));

  let way = 'right';
  let i = 0,
    j = 0,
    number = 1;

  while (number <= n * n) {
    switch (way) {
      case 'right':
        result[i][j++] = number++;
        if (j === n - 1 || result[i][j + 1] !== 0) way = 'down';
        break;
      case 'down':
        result[i++][j] = number++;
        if (i === n - 1 || result[i + 1][j] !== 0) way = 'left';
        break;
      case 'left':
        result[i][j--] = number++;
        if (j === 0 || result[i][j - 1] !== 0) way = 'up';
        break;
      case 'up':
        result[i--][j] = number++;
        if (i === 0 || result[i - 1][j] !== 0) way = 'right';
        break;
    }
  }

  return result;
};

// 이 문제가 왜 레벨 0인지 모르겠다.
