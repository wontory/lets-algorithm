const solution = (a, d, included) => {
  let answer = 0;

  included.forEach((bool, index) => (answer += bool ? a + d * index : 0));

  return answer;
};
