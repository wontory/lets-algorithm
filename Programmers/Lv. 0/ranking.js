function solution(score) {
  const avg = score.map((v) => (v[0] + v[1]) / 2);
  const rank = [...avg].sort((a, b) => b - a);
  return avg.map((v) => rank.indexOf(v) + 1);
}
