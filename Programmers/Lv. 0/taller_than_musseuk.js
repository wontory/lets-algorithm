function solution(array, height) {
  return array.reduce((acc, h) => (h > height ? acc + 1 : acc), 0);
}
