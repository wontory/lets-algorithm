const solution = (my_string, queries) => {
  let answer = [...my_string];

  queries.forEach(([s, e]) => {
    const reversed = answer.slice(s, e + 1).reverse();

    for (let i = s; i < e + 1; i++) answer[i] = reversed[i - s];

    // splice를 이용한 풀이
    // answer.splice(s, reversed.length, ...reversed);
  });

  return answer.join('');
};
