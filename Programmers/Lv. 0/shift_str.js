function solution(A, B) {
  const result = B.includes(A.slice(0, 2))
    ? B.indexOf(A.slice(0, 2))
    : B.length - B.indexOf(A.slice(1, 2)) - 1;

  for (let i = 0; i < B.length; i++) {
    let index = i + result;
    if (i + result >= B.length) index -= B.length;
    if (A[i] !== B[index]) return -1;
  }

  return result;
}

// 와... 이어붙여서 해결하는 방법은 생각도 못했다.
// const solution = (a, b) => (b + b).indexOf(a)
