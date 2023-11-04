const solution = (myString) =>
  [...myString].map((char) => (char < 'l' ? 'l' : char)).join('');

// 정규식을 이용한 풀이
// const solution = myString => myString.replace(/[a-k]/g,'l');
