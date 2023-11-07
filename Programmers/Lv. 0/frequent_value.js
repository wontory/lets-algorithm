function solution(array) {
  const counts = array.reduce(
    (acc, num) => ({ ...acc, [num]: acc[num] ? acc[num] + 1 : 1 }),
    {}
  );
  const result = Object.keys(counts).filter(
    (key) => counts[key] === Math.max(...Object.values(counts))
  );
  return result.length > 1 ? -1 : +result;
}
