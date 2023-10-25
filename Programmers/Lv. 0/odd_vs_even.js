const solution = (num_list) => {
  const odd = num_list.filter((_, index) => index % 2 === 0);
  const even = num_list.filter((_, index) => index % 2 === 1);

  const odd_sum = odd.reduce((acc, num) => acc + num);
  const even_sum = even.reduce((acc, num) => acc + num);

  return odd_sum > even_sum ? odd_sum : even_sum;
};
