function solution(array, n) {
  return array.reduce((acc, num) => (num === n ? acc + 1 : acc), 0);
}
