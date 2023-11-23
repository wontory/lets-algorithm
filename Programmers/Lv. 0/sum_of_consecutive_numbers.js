function solution(num, total) {
  let gap = 0;

  for (let i = 0; i < num; i++) gap += i;

  let start = (total - gap) / num;

  return Array(num)
    .fill(start)
    .map((el, i) => el + i);
}
