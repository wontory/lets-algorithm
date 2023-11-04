const solution = (n) => {
  const result = Array.from({ length: n }, () => new Array(n).fill(0));
  result.forEach((arr, index) => (arr[index] = 1));
  return result;
};
