const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n').map(v=>+v);
const N = input.shift();
let Dasom = input.shift();
let count = 0;

while (true) {
    input.sort((a,b) => a-b); // 오름차순으로 정렬
    let flag = true; // 다솜이가 당선된다면?
    let maxIdx = input.length - 1;
    
    if (Dasom <= input[maxIdx]) { // 다솜이의 득표가 가장 많은 득표자보다 작거나 같다면?
        Dasom++; // 다솜이에게 + 1표
        input[maxIdx]--; // 가장 많은 득표자 득표수 - 1
        count++; // 한명 매수
        flag = false; // 당선 ㄴㄴ
    }

    if (flag) { // 당선 ㅇㅇ
        break; // while문 break
    }
}
console.log(count); // 몇명 매수했는지 출력