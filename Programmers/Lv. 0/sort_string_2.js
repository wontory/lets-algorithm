function solution(my_string) {
  return [...my_string]
    .map((char) => char.toLowerCase())
    .sort()
    .join('');
}
