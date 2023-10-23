const solution = (str_list) => {
  /** 1차 풀이 */
  // const l_index = str_list.indexOf('l');
  // const r_index = str_list.indexOf('r');
  // if (l_index === -1 && r_index === -1) return [];
  // else if (l_index === -1) return str_list.slice(r_index + 1);
  // else if (r_index === -1) return str_list.slice(0, l_index);
  // return l_index < r_index ? str_list.slice(0, l_index) : str_list.slice(r_index + 1);

  /** 2차 풀이 */
  const index = str_list.findIndex((char) => char === 'l' || char === 'r');

  if (index === -1) return [];
  else
    return str_list[index] === 'l'
      ? str_list.slice(0, index)
      : str_list.slice(index + 1);
};
