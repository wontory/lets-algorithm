const solution = (intStrs, k, s, l) => {
  return intStrs
    .map((intStr) => Number([...intStr].slice(s, s + l).join('')))
    .filter((int) => int > k);
};
