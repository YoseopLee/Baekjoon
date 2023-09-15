const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString();
+input;
const count = input/4;
const long = 'long ';
console.log(long.repeat(count) + 'int');