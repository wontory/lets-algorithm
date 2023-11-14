function solution(quiz) {
  return quiz.map((func) =>
    eval(func.split(' = ')[0]) === +func.split(' = ')[1] ? 'O' : 'X'
  );
}
