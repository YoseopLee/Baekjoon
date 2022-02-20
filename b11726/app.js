const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString();
const n = Number(input);
const arr = [0,1,2];
for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i-1] + arr[i-2]) % 10007;
}
console.log(arr[n]);