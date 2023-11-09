function solution(n) {
  let count = 1; // n * 1
  for (let i = 1; i <= Math.floor(n / 2); i++) n % i === 0 && count++;
  return count;
}
