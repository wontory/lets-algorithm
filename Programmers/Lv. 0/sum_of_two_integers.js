const solution = (a, b) => String(BigInt(a) + BigInt(b));

// 처음에 String(+a + +b); 이런식으로 구현했었는데 2번 예제 입출력에서 막혔다.
// 값이 305793246910280500000 이렇게 반올림되길래 큰 수에 대한 처리가 필요한가보다 했다.
// JavaScript에도 BigInt가 있는줄은 처음 알았다.
