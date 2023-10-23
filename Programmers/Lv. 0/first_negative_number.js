const solution = (num_list) => {
  for (let num of num_list) if (num < 0) return num_list.indexOf(num);
  return -1;

  // return num_list.findIndex((num) => num < 0);
};
