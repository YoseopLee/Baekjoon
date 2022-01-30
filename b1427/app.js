const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('');

solution();

function solution() {
    
    input.sort((a,b) =>  b-a);
    let answer = '';

    for (let i = 0; i < input.length; i++) {
        answer += input[i];
    }
    console.log(Number(answer));
}