const solution = (my_string) => {
  const result = [];
  result.length = 52;
  result.fill(0);

  [...my_string].forEach((char) =>
    char.charCodeAt() > 90
      ? result[char.charCodeAt() - 71]++
      : result[char.charCodeAt() - 65]++
  );

  return result;
};
