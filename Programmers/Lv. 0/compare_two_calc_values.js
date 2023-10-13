const solution = (a, b) => {
  const ab = Number(String(a) + String(b));
  const ab2 = 2 * a * b;

  return ab > ab2 ? ab : ab2;
};
