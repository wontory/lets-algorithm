function solution(s1, s2) {
  return s1.reduce((acc, v) => (s2.indexOf(v) !== -1 ? acc + 1 : acc), 0);
}
