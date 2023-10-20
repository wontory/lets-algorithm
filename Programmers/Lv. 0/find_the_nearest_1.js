const solution = (arr, idx) => {
  let answer = -1;

  arr.slice(idx).some((num, index) => {
    if (num === 1) {
      answer = index + idx;
      return true;
    }
  });

  // 처음에 forEach로 해결하려했으나, 중간에 break를 걸어줄 방법이 없었다.
  // some을 사용하면 `return true`를 break처럼, `return false;`를 continue처럼 사용할 수 있다.

  return answer;
};
