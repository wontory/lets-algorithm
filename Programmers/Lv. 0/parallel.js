function solution(dots) {
  const sortedDots = dots.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < 4; i++) {
    const unselected = sortedDots.filter(
      (_, index) => index !== 0 && index !== i
    );
    const line1 =
      (sortedDots[i][1] - sortedDots[0][1]) /
      (sortedDots[i][0] - sortedDots[0][0]);
    const line2 =
      (unselected[0][1] - unselected[1][1]) /
      (unselected[0][0] - unselected[1][0]);
    if (line1 === line2) return 1;
  }

  return 0;
}
