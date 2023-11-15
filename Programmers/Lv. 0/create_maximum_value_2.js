function solution(numbers) {
  const [min1, min2] = numbers.sort((a, b) => a - b);
  const [max2, max1] = numbers.sort((a, b) => b - a);

  return Math.max(min1 * min2, max1 * max2);
}
