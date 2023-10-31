const solution = (rank, attendance) => {
  const [a, b, c] = rank
    .filter((_, index) => attendance[index])
    .sort((a, b) => a - b)
    .map((studId) => rank.indexOf(studId));

  return 10000 * a + 100 * b + c;
};
