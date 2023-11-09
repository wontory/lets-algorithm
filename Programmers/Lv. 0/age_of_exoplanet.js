function solution(age) {
  return [...age.toString()]
    .map((number) => String.fromCharCode(+number + 97))
    .join('');
}
