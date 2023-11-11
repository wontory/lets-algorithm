function solution(n) {
  let result = 1;
  let number = 1;

  while (number <= n) number *= ++result;

  return result - 1;
}
