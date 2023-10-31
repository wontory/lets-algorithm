const solution = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    const sum1 = arr1.reduce((acc, num) => (acc += num));
    const sum2 = arr2.reduce((acc, num) => (acc += num));

    return sum1 > sum2 ? 1 : sum1 === sum2 ? 0 : -1;
  } else {
    return arr1.length > arr2.length ? 1 : -1;
  }
};
