const solution = (arr) => {
  const answer = [];

  arr.forEach((num) => {
    for (let i = 0; i < num; i++) answer.push(num);
  });

  return answer;
};

// const solution = (arr) => arr.reduce((acc, num) => [...acc, ...new Array(num).fill(num)], []);
