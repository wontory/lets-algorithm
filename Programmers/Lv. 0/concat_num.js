const solution = (num_list) => {
  const odd = [];
  const even = [];

  num_list.forEach((num) => (num % 2 ? odd.push(num) : even.push(num)));

  return Number(odd.join('')) + Number(even.join(''));
};
