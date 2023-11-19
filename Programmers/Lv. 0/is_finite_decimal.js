function solution(a, b) {
  for (let i = Math.min(a, b); i > 1; i--)
    if (a % i === 0 && b % i === 0) [a, b] = [a / i, b / i];

  while (b % 2 === 0) b /= 2;
  while (b % 5 === 0) b /= 5;

  return b === 1 ? 1 : 2;
}
