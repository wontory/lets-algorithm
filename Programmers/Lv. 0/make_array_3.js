const solution = (arr, intervals) => {
  const answer = [];

  intervals.forEach(([s, e]) => {
    answer.push(...arr.slice(s, e + 1));
  });

  return answer;
};
