function solution(box, n) {
  return box.reduce((acc, len) => acc * Math.floor(len / n), 1);
}
