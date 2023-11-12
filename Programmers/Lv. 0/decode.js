function solution(cipher, code) {
  return [...cipher].filter((_, index) => (index + 1) % code === 0).join('');
}
