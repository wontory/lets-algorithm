const solution = (q, r, code) => {
  return [...code].map((c, i) => (i % q === r ? c : '')).join('');
  // filter를 사용했어도 됐을 것 같다.
  // [...code].filter((c, i) => i % q === r).join('');
};
