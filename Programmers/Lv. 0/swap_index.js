function solution(my_string, num1, num2) {
  const result = [...my_string];
  let tmp = result[num1];
  result[num1] = result[num2];
  result[num2] = tmp;
  return result.join('');
}

// "구조분해할당"
// [result[num1], result[num2]] = [result[num2], result[num1]];
