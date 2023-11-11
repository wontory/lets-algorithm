function solution(my_string) {
  return [...my_string.replace(/[^0-9]/g, '')]
    .map((n) => +n)
    .sort((a, b) => a - b);
}

// 이런 정규식도 있다. match 사용 -> /\d/g
