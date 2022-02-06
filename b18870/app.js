const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift()); // input 배열의 첫번째 요소를 빼주고
let inputArray = input[0].split(' ').map(x => +x); // map을 통해 반환되는 요소들을 숫자화 시키면 시간효율성 Up
const setArray = [...new Set(inputArray)].sort((a,b) => a-b); // 중복 제거 및 정렬

let dic = {}; // 빈 객체 생성
setArray.forEach((e, idx) => {dic[e] = idx}) // forEach 사용해서 정렬한 배열의 각 요소를 key로 인덱스 값을 value로 하는 딕셔너리 생성

let answer = '';

for (let i = 0; i < inputArray.length; i++) {
    answer += dic[inputArray[i]] + ' '; // inputArray 배열의 요소를 key값으로 가지고 있는 dic의 value 값을 answer에 추가
}

console.log(answer);