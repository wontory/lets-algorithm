const solution = (str_list, ex) =>
  str_list.filter((str) => !str.includes(ex)).join('');
