const solution = (my_string) => {
  const answer = [];

  for (let i = 1; i <= my_string.length; i++) {
    answer.push(my_string.slice(-1 * i));
  }

  return answer.sort();
};
