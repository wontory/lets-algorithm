const solution = (number) => {
  return number.split('').reduce((acc, num) => acc + Number(num), 0) % 9;
};

// split 외에도 [...number] 스프레드 연산자를 사용할 수 있다!
