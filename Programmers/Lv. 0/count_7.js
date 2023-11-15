function solution(array) {
  return array.reduce(
    (acc, num) => acc + [...String(num)].filter((char) => char === '7').length,
    0
  );
}
