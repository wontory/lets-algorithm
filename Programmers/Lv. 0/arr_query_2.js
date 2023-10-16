const solution = (arr, queries) => {
  return queries.map(([s, e, k]) => {
    let filteredArr = arr.slice(s, e + 1).filter((i) => i > k);
    return filteredArr.length ? Math.min(...filteredArr) : -1;
  });
};
