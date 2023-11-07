function solution(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
}
