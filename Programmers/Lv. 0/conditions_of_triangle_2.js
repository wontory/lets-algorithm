function solution(sides) {
  return sides[0] + sides[1] - Math.abs(sides[0] - sides[1]) - 1;
}
