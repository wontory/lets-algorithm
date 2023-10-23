const solution = (arr, query) => {
  let answer = [...arr];

  query.forEach((num, index) => {
    answer = index % 2 ? answer.slice(num) : answer.slice(0, num + 1);
  });

  return answer;
};
