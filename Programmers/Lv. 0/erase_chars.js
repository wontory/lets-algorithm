const solution = (my_string, indices) => {
  return [...my_string]
    .filter((char, index) => indices.indexOf(index) === -1)
    .join('');
};
