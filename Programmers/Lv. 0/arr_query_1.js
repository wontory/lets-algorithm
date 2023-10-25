const solution = (arr, queries) => {
  queries.forEach(([s, e]) => {
    for (let i = s; i < e + 1; i++) arr[i]++;
  });

  return arr;
};
