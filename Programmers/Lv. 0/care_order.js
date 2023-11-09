function solution(emergency) {
  return [...emergency]
    .sort((a, b) => b - a)
    .reduce((acc, e, i) => {
      acc[emergency.indexOf(e)] = i + 1;
      return acc;
    }, []);
}
