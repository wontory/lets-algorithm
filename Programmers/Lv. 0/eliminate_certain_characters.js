function solution(my_string, letter) {
  return [...my_string].filter((char) => char !== letter).join('');
}
