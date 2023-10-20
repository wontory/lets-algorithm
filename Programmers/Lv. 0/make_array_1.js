const solution = (n, k) => {
  const answer = [];

  for (let i = 1; i <= n / k; i++) answer[i - 1] = i * k;

  return answer;
};
