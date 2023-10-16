const solution = (arr, queries) => {
  let answer = [...arr];

  queries.forEach((query) => {
    let temp = answer[query[0]];
    answer[query[0]] = answer[query[1]];
    answer[query[1]] = temp;
  });

  // queries.forEach(([i, j]) => [answer[i], answer[j]] = [answer[j], answer[i]]);

  return answer;
};
