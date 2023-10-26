const solution = (arr) => {
  let arr_clone = [...arr];
  let result = 0;

  while (true) {
    const transformed = arr_clone.map((num) =>
      num < 50 && num % 2 === 1
        ? num * 2 + 1
        : num >= 50 && num % 2 === 0
        ? num / 2
        : num
    );

    if (JSON.stringify(transformed) === JSON.stringify(arr_clone)) {
      return result++;
    } else {
      arr_clone = transformed;
      result++;
    }
  }
};
