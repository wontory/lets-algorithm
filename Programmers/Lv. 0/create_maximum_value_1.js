function solution(numbers) {
  return numbers
    .sort((a, b) => a - b)
    .slice(-2)
    .reduce((acc, num) => acc * num);
}

// 내림차순 후 "구조분해할당"
// function solution(numbers) {
//     let [a, b] = numbers.sort((a,b) => b - a);
//     return a * b;
// }
