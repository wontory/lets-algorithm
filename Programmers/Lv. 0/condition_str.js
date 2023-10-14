const solution = (ineq, eq, n, m) => {
  if (eq === '=' && n === m) return 1;
  else if (ineq === '<' && n < m) return 1;
  else if (ineq === '>' && n > m) return 1;
  else return 0;
};
