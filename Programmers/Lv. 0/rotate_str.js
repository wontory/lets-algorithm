const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = [line];
}).on('close', function () {
  str = input[0];

  // for (let i of str) <- 이렇게도 쓸 수 있구나!
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }

  // 배열 함수를 썼어도 됐을 것 같다.
});
