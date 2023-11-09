function solution(n) {
  let acc = 0;
  for (let i = 2; i <= n; i += 2) acc += i;
  return acc;
}
