const solution = (a, b, c, d) => {
  const dict = {};
  [a, b, c, d].forEach((num) => (dict[num] = dict[num] ? dict[num] + 1 : 1));

  const keys = Object.keys(dict).map(Number);
  switch (keys.length) {
    case 1:
      return a * 1111;
    case 2:
      if (dict[keys[0]] === 2) {
        return (keys[0] + keys[1]) * Math.abs(keys[0] - keys[1]);
      } else {
        return dict[keys[0]] === 3
          ? (10 * keys[0] + keys[1]) ** 2
          : (10 * keys[1] + keys[0]) ** 2;
      }
    case 3:
      if (dict[keys[0]] === 2) {
        return keys[1] * keys[2];
      } else {
        return dict[keys[1]] === 2 ? keys[0] * keys[2] : keys[0] * keys[1];
      }
    case 4:
      return Math.min(a, b, c, d);
  }
};
