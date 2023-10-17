const solution = (arr) => {
  let i = 0;
  const stk = [];

  while (i < arr.length)
    stk.length === 0
      ? stk.push(arr[i++])
      : stk.at(-1) < arr[i]
      ? stk.push(arr[i++])
      : stk.pop();

  return stk;
};
