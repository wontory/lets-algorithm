const solution = (arr) => {
  const stk = arr.reduce(
    (acc, num) =>
      [...acc].slice(-1)[0] === num
        ? [...acc.splice(0, acc.length - 1)]
        : [...acc, num],
    []
  );

  return stk.length ? stk : [-1];
};
