const solution = (arr, n) =>
  arr.map((num, index) => (index % 2 === arr.length % 2 ? num : num + n));
