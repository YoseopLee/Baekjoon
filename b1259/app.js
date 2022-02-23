const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
input.pop();
for (let i = 0; i < input.length; i++) {
    let reversed = input[i].split('').reverse().join('');
    if (input[i] === reversed) {
        console.log('yes');
    } else {
        console.log('no');
    }
}