const solution = (myString, pat) => {
  return [...myString]
    .map((char) => (char === 'A' ? 'B' : 'A'))
    .join('')
    .indexOf(pat) === -1
    ? 0
    : 1;
};

/** includes라는 함수도 있다. */
// const solution = (myString, pat) => {
//     return [...myString].map((char) => char === 'A' ? 'B' : 'A').join('').includes(pat) ? 1 : 0;
// }
