const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n').map(v=>+v);
const N = input.shift();
let Dasom = input.shift();
let count = 0;
while (true) {
    input.sort((a,b) => a-b);
    let flag = true;
    if (Dasom <= input[input.length - 1]) {
        Dasom++;
        input[input.length-1]--;
        count++;
        flag = false;
    } else if (flag) {
        break;
    }
}
console.log(count);