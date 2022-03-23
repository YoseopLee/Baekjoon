const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n').map(v=>+v);
const N = input.shift();
// 삼각형 결정조건 => 세 변을 모두 알때 가장 긴 변 >= 나머지 두변의 합이면 삼각형 성립 불가
input.sort((a,b) => b-a);
let arr = [];
let answer = 0;
for (let i = 0; i < N-2; i++) {
    if (input[i] < input[i + 1] + input[i + 2]) {
        arr.push(input[i], input[i + 1], input[i + 2]);
        answer = arr.reduce((a,b) => a+b);
        break; 
    } else if (answer === 0) {
        answer = -1;
    }
}
console.log(answer);