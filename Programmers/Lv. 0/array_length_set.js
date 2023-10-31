const solution = (strArr) => {
  return Math.max(
    ...strArr.reduce((acc, str) => {
      acc[str.length]++;
      return acc;
    }, new Array(strArr.length).fill(0))
  );
};
