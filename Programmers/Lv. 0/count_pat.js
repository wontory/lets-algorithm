const solution = (myString, pat) => {
  let result = 0;

  while (myString.indexOf(pat) !== -1) {
    myString = myString.slice(myString.indexOf(pat) + 1);
    result++;
  }

  return result;
};
