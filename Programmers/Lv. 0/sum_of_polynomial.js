function solution(polynomial) {
  const result = polynomial.split(' + ').reduce(
    (acc, v) => {
      v.includes('x')
        ? (acc[0] += v.length === 1 ? 1 : Number(v.slice(0, -1)))
        : (acc[1] += Number(v));
      return acc;
    },
    [0, 0]
  );

  return `${result[0] ? `${result[0] === 1 ? '' : result[0]}x` : ''}${
    result[0] && result[1] ? ' + ' : ''
  }${result[1] || ''}`;
}
