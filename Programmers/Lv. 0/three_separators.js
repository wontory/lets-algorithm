const solution = (myStr) => {
  const answer = myStr
    .split('a')
    .join(',')
    .split('b')
    .join(',')
    .split('c')
    .join(',')
    .split(',')
    .filter((str) => str);
  return answer.length ? answer : ['EMPTY'];
};

/** 정규식을 이용한 풀이 */
// const solution = myStr => myStr.match(/[^a-c]+/g) || ['EMPTY'];
