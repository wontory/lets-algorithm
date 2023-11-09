function solution(angle) {
  return angle % 90
    ? Math.floor(angle / 90)
      ? 3
      : 1
    : Math.floor(angle / 90) * 2;
}
