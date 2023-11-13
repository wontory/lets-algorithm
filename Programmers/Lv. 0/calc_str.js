function solution(my_string) {
  const arr = my_string.split(' ');

  return arr.reduce((acc, v, i) => {
    switch (v) {
      case '+':
        return acc + +arr[i + 1];
      case '-':
        return acc - +arr[i + 1];
      default:
        return acc;
    }
  }, +arr[0]);
}

// const solution = eval
// 이런 코드도 있지만, 보안상 좋지 않다. MDN에서도 eval의 사용에 대해 경고하고 있다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/eval#eval을_절대_사용하지_말_것!
