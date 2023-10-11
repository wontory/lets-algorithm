const solution = (n) => {
  const MEMO = [1, 3];
  const MOD = 1000000007;

  if (n % 2 === 1) return 0;

  // f(n) = f(n - 2) * f(2) + f(n - 4) * 2 + ... + f(2) * 2 + 2;
  for (let i = 2; i < n / 2 + 1; i++) {
    // MEMO[i] = (MEMO[i - 1] * MEMO[1] + MEMO.slice(0, i - 1).reduce((a, b) => a + b, 0) * 2) % MOD;

    MEMO[i] = MEMO[i - 1] * MEMO[1];
    for (let j = 0; j < i - 1; j++) MEMO[i] += MEMO[j] * 2;
    MEMO[i] %= MOD;
  }

  return MEMO[n / 2];
};
