const solution = (arr, flag) =>
  arr.reduce(
    (acc, num, index) =>
      flag[index]
        ? [...acc, ...Array(num * 2).fill(num)]
        : acc.splice(0, acc.length - num),
    []
  );
