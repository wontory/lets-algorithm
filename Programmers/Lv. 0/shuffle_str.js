const solution = (str1, str2) => {
  let answer = '';

  str1.split('').map((char, index) => (answer += char + str2[index]));

  return answer;
};
