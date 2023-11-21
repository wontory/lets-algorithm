function solution(numlist, n) {
  const gaps = numlist.map((num) => num - n);
  const rank = [...gaps]
    .sort((a, b) => b - a)
    .sort((a, b) => Math.abs(a) - Math.abs(b));

  return rank.map((r) => numlist[gaps.indexOf(r)]);
}
