function solution(s) {
  return s
    .split(' ')
    .reduce((acc, num) => (num === 'Z' ? acc.slice(0, -1) : [...acc, +num]), [])
    .reduce((acc, num) => acc + num, 0);
}
