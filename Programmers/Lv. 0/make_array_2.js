const solution = (l, r) => {
  const answer = [];

  for (let i = 5 * Math.ceil(l / 5); i <= r; i += 5) {
    const set = new Set((i / 5).toString().split('').map(Number));

    set.delete(0);
    set.delete(1);

    set.size === 0 && answer.push(i);
  }

  return answer.length === 0 ? [-1] : answer;
};
