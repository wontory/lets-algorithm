function solution(chicken) {
  let coupon = chicken;
  let result = 0;

  while (coupon >= 10) {
    result += Math.floor(coupon / 10);
    coupon -= Math.floor(coupon / 10) * 9;
  }

  return result;
}
