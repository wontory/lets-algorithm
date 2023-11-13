function solution(n) {
  const result = new Set();

  for (let i = 1; i <= Math.ceil(n / 2); i++)
    n % i === 0 && result.add(i).add(n / i);

  return [...result].sort((a, b) => a - b);
}
