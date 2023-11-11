function solution(n) {
  const answer = new Set();

  let a = 2;
  while (Math.floor(n) > 1) {
    while (n % a === 0) {
      n /= a;
      answer.add(a);
    }
    a++;
  }

  return [...answer];
}
