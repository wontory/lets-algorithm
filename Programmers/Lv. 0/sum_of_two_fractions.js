function solution(numer1, denom1, numer2, denom2) {
  const result = [numer1 * denom2 + numer2 * denom1, denom1 * denom2];

  let GCD = 1;

  for (let i = 2; i <= Math.min(result[0], result[1]); i++)
    if (result[0] % i === 0 && result[1] % i === 0) GCD = i;

  return result.map((num) => num / GCD);
}
