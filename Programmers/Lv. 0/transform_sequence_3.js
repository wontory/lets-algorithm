const solution = (arr, k) =>
  k % 2 ? arr.map((num) => num * k) : arr.map((num) => num + k);
