const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  for (let i = 1; i <= input[0]; i++) {
    let str = '';
    for (let j = 0; j < i; j++) str += '*';
    console.log(str);
  }
});

// '*'.repeat(i);
