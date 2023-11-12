function solution(sides) {
  return sides.splice(sides.indexOf(Math.max(...sides)), 1) <
    sides.reduce((acc, len) => acc + len)
    ? 1
    : 2;
}
