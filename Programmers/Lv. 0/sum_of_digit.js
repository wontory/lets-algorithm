function solution(n) {
  return [...String(n)].reduce((acc, v) => acc + +v, 0);
}
