const solution = (arr, k) =>
  [...new Set(arr)].concat(new Array(k).fill(-1)).slice(0, k);
