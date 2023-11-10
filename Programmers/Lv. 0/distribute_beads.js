function solution(rsp) {
  return [...rsp]
    .map((number) => (number === '2' ? '0' : number === '0' ? '5' : '2'))
    .join('');
}
