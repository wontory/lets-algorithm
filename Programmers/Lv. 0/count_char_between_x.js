const solution = (myString) => {
  const answer = [];

  const index = [...myString]
    .map((char, index) => {
      if (char === 'x') return index;
    })
    .filter((index) => index !== undefined);

  answer.push(index[0]);
  for (let i = 1; i < index.length; i++) {
    answer[i] = index[i] - index[i - 1] - 1;
  }
  answer.push(myString.slice(index[index.length - 1]).length - 1);

  return answer;
};

/** 난 참 어렵게도 풀었다... x로 split할 생각을 왜 못했을까... */
// const solution = (myString) => {
//     return myString.split('x').map((str) => str.length);
// }
