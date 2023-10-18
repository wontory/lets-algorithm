const solution = (my_string, is_suffix) => {
  return my_string.slice(-1 * is_suffix.length) === is_suffix ? 1 : 0;
  // 헛웃음만 나온다 ㅋㅋ
  // return my_string.endsWith(is_suffix) ? 1 : 0;
};
