const solution = (arr) => {
  let answer = true;

  arr.forEach((el1, id1) =>
    el1.forEach((el2, id2) => (answer = answer && el2 === arr[id2][id1]))
  );

  return +answer;
};

// const solution = (arr) => arr.every((r, i) => r.every((_, j) => arr[i][j] === arr[j][i])) ? 1 : 0;
