function solution(order) {
  return String(order).match(/[369]/g)?.length || 0;
}
