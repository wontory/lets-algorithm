function solution(array) {
  return array.reduce(
    (acc, v, i) => (v > acc[0] ? [v, i] : acc),
    [array[0], 0]
  );
}
