function solution(before, after) {
  const result = [...after];

  for (let i = 0; i < before.length; i++) {
    if (result.indexOf(before[i]) === -1) return 0;
    result.splice(result.indexOf(before[i]), 1);
  }

  return 1;
}

// 각 문자열을 정렬해서 비교하는 방법
// function solution(before, after) {
//     return [...before].sort().join('') === [...after].sort().join('') ? 1 : 0;
// }
