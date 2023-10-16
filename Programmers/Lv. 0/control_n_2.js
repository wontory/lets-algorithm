const solution = (numLog) => {
  let answer = '';

  numLog.forEach((num, index) => {
    switch (num - numLog[index - 1]) {
      case 1:
        answer += 'w';
        break;
      case -1:
        answer += 's';
        break;
      case 10:
        answer += 'd';
        break;
      case -10:
        answer += 'a';
        break;
    }
  });

  return answer;
};
