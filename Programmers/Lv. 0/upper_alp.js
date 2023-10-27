const solution = (my_string, alp) =>
  [...my_string]
    .map((char) => (char === alp ? char.toUpperCase() : char))
    .join('');
