const solution = (my_strings, parts) => {
  return my_strings
    .map((my_string, index) => {
      const [s, e] = parts[index];
      return my_string.slice(s, e + 1);
    })
    .join('');
};
