function solution(array, n) {
  return array.reduce((acc, num) => {
    if (Math.abs(acc - n) > Math.abs(num - n)) return num;
    else if (Math.abs(acc - n) === Math.abs(num - n))
      return acc > num ? num : acc;
    else return acc;
  }, array[0]);
}
