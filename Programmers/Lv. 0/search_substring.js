const solution = (myString, pat) => {
  const result = myString.toUpperCase().indexOf(pat.toUpperCase());
  return result === -1 ? 0 : 1;
};
