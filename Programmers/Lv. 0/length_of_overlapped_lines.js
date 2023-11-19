function solution(lines) {
  const line = new Array(200).fill(0);

  lines.forEach(([s, e]) => {
    for (let i = s; i < e; i++) line[i + 100]++;
  });

  return line.reduce((acc, v) => (v > 1 ? acc + 1 : acc), 0);
}
