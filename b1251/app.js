const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('');
let answer = [];
for (let i = 0; i < input.length - 2; i++) { // 무조건 길이 1이상 단어 3개로 쪼개야하기 때문에 최소한의 범위를 남겨두고 탐색을 진행.
    for (let j = i + 1; j < input.length - 1; j++) { // j와 k는 어디서 3등분 할지 정하는 구분점이라고 생각하면 됨.
        for (let k = j + 1; k < input.length; k++) {
            tmp = input.slice(0,j).reverse().join('') + input.slice(j, k).reverse().join('') + input.slice(k).reverse().join(''); // 조건에 맞게 짜른 단어를 뒤집고 합침
            answer.push(tmp);
        }
    }
}
answer.sort(); // answer배열 사전순 정렬
console.log(answer[0]); // answer배열의 첫번째 요소가 답.