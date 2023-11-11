function solution(n) {
  let result = new Set();

  let a = 2;
  while (a <= n / 2) {
    let b = a;
    while (a * b <= n) result.add(a * b++);
    a++;
  }

  return result.size;
}
