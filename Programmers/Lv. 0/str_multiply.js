const solution = (my_string, k) => {
  let answer = '';

  while (k--) answer += my_string;

  return answer;
  // return my_string.repeat(k);
  // repeat이라는 함수를 이용해도 된다!
};
