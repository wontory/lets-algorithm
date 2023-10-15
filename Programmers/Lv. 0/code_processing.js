const solution = (code) => {
  let mode = false;

  const answer = code
    .split('')
    .map((c, index) => {
      if (c === '1') {
        mode = !mode;
      } else {
        if (mode) {
          if (index % 2 === 1) return c;
        } else {
          if (index % 2 === 0) return c;
        }
      }
    })
    .join('');

  return answer.length === 0 ? 'EMPTY' : answer;
};
