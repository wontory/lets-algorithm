const solution = (k, d) => {
  let answer = Math.floor(d / k) * 2 + 1;
  let j_init = k * Math.floor((d - 1) / k);

  for (let i = k; i < d; i += k) {
    for (let j = j_init; j > 0; j -= k) {
      if (i ** 2 + j ** 2 <= d ** 2) {
        answer += Math.floor(j / k);
        j_init = j;
        break;
      }
    }
  }

  return answer;
};
