const solution = (picture, k) =>
  picture.reduce(
    (acc, arr) => [
      ...acc,
      ...new Array(k).fill([...arr].map((char) => char.repeat(k)).join('')),
    ],
    []
  );
