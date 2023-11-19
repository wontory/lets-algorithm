function solution(my_string) {
  return my_string.split(/[a-zA-Z]/g).reduce((acc, v) => acc + +v, 0);
}
