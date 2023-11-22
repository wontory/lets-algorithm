function solution(i, j, k) {
  let result = 0;
  const regex = new RegExp(`[${k}]`, 'g');

  for (let l = i; l <= j; l++) result += String(l).match(regex)?.length || 0;

  return result;
}

// i부터 j까지 문자열로 이어서 filter한 후 길이를 구했어도 됐을 것 같다.
//
// 새로 짠 코드
//
// function solution(i, j, k) {
//   let result = '';
//   for (let str = i; str <= j; str++) result += str;
//   return [...result].filter((el) => +el === k).length;
// }
