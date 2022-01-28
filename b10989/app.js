// counting sort , 계수 정렬
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
input.shift();
const max = Math.max(...input);
const count = Array(max + 1).fill(0);

for (let i = 0; i < input.length; i++) {
    count[input[i]]++;
}

for (let i = 0; i < count.length; i++) {
    if (count[i]) {
        for (let j = 0; j < count[i]; j++) {
            console.log(i);
        }
    }
}


// nodejs로는 입력을 받아서 그 입력 값을 배열에 저장하는 것부터 메모리 초과라고 나기 때문에 백준에서는
// 해당문제를 nodejs로 풀 수 없음.