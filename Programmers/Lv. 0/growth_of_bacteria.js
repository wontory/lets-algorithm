function solution(n, t) {
  let result = n;

  while (t-- > 0) result *= 2;

  return result;
}

// Math.pow 활용
// function solution(n, t) {
//     return n * Math.pow(2, t);
// }

// Shift 연산자
// function solution(n, t) {
//     return n << t;
// }
