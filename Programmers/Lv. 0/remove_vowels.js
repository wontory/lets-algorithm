function solution(my_string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return [...my_string].filter((letter) => !vowels.includes(letter)).join('');
}

// 정규식으로 풀기
// function solution(my_string) {
//     return my_string.replace(/[aeiou]/g, '');
// }
