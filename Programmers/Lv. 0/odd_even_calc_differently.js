const solution = (n) => {
  switch (n % 2) {
    case 0:
      return calc_even(n);
    case 1:
      return calc_odd(n);
  }
};

const calc_odd = (n) => {
  let result = 0;

  while (n > 0) {
    result += n;
    n = n - 2;
  }

  return result;
};

const calc_even = (n) => {
  let result = 0;

  while (n > 0) {
    result += n ** 2;
    n = n - 2;
  }

  return result;
};

// 반복문을 사용하지 않는 풀이 (수학)
// const solution = (n) => {
//   if (n % 2 === 1) return ((n + 1) / 2) * ((n + 1) / 2);
//   else return (n * (n + 1) * (n + 2)) / 6;
// };
