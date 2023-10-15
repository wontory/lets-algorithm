const solution = (a, b, c) => {
  if (a === b && b === c)
    return (
      (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3)
    );
  else if (a === b || b === c || c === a)
    return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
  else return a + b + c;
};

// Set 자료구조로 고유한 값의 개수를 알아내는 방법도 좋은 방법같다!
