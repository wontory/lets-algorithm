const solution = (numbers, n) => {
  return numbers.reduce((acc, number, index, arr) => {
    if (acc > n) {
      arr.splice(1);
      return acc;
    }

    return acc + number;
  });

  // return numbers.reduce((acc, number, index, arr) => acc > n ? acc : acc + number);
};
