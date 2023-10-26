const solution = (num_list) => {
  return num_list.length > 10
    ? num_list.reduce((acc, num) => acc + num)
    : num_list.reduce((acc, num) => acc * num);
};
