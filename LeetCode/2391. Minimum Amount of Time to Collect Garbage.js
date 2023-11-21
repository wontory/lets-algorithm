// 내 풀이
//---------------------------------------------------------------
// 해당하는 쓰레기를 보유한 가장 먼 집까지의 거리를 구하고
// 그 거리들과 전체 garbage의 길이를 더한 값을 리턴한다.
//---------------------------------------------------------------
/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function (garbage, travel) {
  const garbageType = new Set(garbage.join('').split(''));

  const totalTravel = [...garbageType].reduce((acc, v) => {
    let index = 0;

    garbage.forEach((house, i) => {
      if (house.includes(v)) index = i;
    });

    if (index === 0) return acc;

    for (let i = 0; i < index; i++) acc += travel[i];

    return acc;
  }, 0);

  return totalTravel + garbage.join('').length;
};

// 어느 인도인 풀이
//---------------------------------------------------------------
// 접근 방법 자체는 비슷했던 것 같아서 기분은 좋았다.
// 이 코드가 Runtime에서 50ms 정도 더 빠르다.
//---------------------------------------------------------------
// /**
//  * @param {string[]} garbage
//  * @param {number[]} travel
//  * @return {number}
//  */
// var garbageCollection = function(garbage, travel) {
//         let res = 0;

//         for (const g of garbage) {
//             res += g.length;
//         }

//         let [m, p, g] = [false, false, false];

//         for (let i = travel.length; i > 0; i--) {
//             m = m || garbage[i].includes('M');
//             p = p || garbage[i].includes('P');
//             g = g || garbage[i].includes('G');

//             res += travel[i - 1] * (m + p + g);
//         }

//         return res;
// };
