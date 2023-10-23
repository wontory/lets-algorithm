const solution = (arr) => {
  const start = arr.findIndex((num) => num === 2);
  const end = arr.length - [...arr].reverse().findIndex((num) => num === 2);
  // const start = arr.indexOf(2);
  // const end = arr.lastIndexOf(2);

  if (start === -1) return [-1];
  if (start === end) return [2];
  return arr.slice(start, end);
};
