function solution(my_string) {
  return my_string.match(/\d/g).reduce((acc, v) => acc + +v, 0);
}
