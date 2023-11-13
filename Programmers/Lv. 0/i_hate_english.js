const num = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

function solution(numbers) {
  num.forEach(
    (n, i) => numbers.indexOf(n) !== -1 && (numbers = numbers.replaceAll(n, i))
  );
  return +numbers;
}
