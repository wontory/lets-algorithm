function solution(s) {
  const map = [...s].reduce((acc, v) => {
    acc[v] === undefined ? (acc[v] = 1) : acc[v]++;
    return acc;
  }, new Map());

  return Object.keys(map)
    .filter((key) => map[key] === 1)
    .sort()
    .join('');
}

// 첫 번째 index와 마지막 index가 같으면 하나만 있는 것으로 간주하는 방법
//
// function solution(s) {
//     let res = [];
//     for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
//     return res.sort().join('');
// }
