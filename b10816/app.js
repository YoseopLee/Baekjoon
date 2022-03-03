const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const N = Number(input[0]);
const A = input[1].split(' ').map(v=>+v);
const M = Number(input[2]);
const B = input[3].split(' ').map(v=>+v);

let answer = []; // 답을 담을 배열 선언
A.sort((a,b) => a-b); // A를 오름차순으로 정렬
let C = [[A[0], 1]]; // C라는 새로운 배열 생성
for (let i = 1; i < A.length; i++) { 
    if (A[i - 1] === A[i]) { // 만약 A의 i-1번째 요소와 i번째 요소가 같다면?
        C[C.length - 1][1]++; // C배열의 C.length-1 요소의 1번째 인덱스값을 증가. 
    } else { // A의 i-1번째 요소와 i번째 요소가 다르다면?
        C.push([A[i],1]); // C 배열에 [A[i], 1] 요소가 추가됨.
    }
}
// console.log(C) => [[-10, 2], [2, 1], [3, 2], [6, 1], [7, 1], [10, 3]]

// 탐색 대상 정하고, 이분탐색 진행
B.forEach(v=> { 
    let start = 0; // 탐색 대상의 첫번째 요소
    let end = C.length - 1; // 탐색 대상의 마지막 요소
    let res = false; // 중간값과 탐색 요소의 값이 같으면 변화시켜 줄 boolean타입 변수 // 조건식으로 시간복잡도 줄이기위해 필요함

    while (start <= end) { // 이분탐색 진행
        let mid = parseInt((start + end) / 2); // 중간값 선언

        if (v < C[mid][0]) { // 만약 C의 mid 번째 요소의 0번째 인덱스값이 탐색대상의 요소보다 크다면?
            end = mid - 1; // 끝 부분에서 절반으로 줄여서 탐색
        } else if (v > C[mid][0]) { // C의 mid번째 요소의 0번째 인덱스 값이 탐색대상의 요소보다 작다면?
            start = mid + 1; // 시작부분에서 절반으로 줄여서 탐색
        } else { // C의 mid번재 요소의 0번째 인덱스 값과 탐색 대상의 요소가 같다면? => 우리가 이분탐색을 통해 얻고자하는 값
            res = true;
            answer.push(C[mid][1]); // answer 에 C 배열 mid번째 요소 1번 인덱스를 담음.
            break; // 반복문 종료
        }
    }
    if (res === false) { // 아닐경우
        answer.push(0); // 0을 answer에 담아주면
    }
})
console.log(answer.join(' '));