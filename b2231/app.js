const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString();

const N = Number(input); // 주어진 입력
const L = input.split('').length; // 주어진 입력의 자릿수 

solution(N,L);

function solution(N, L) {
    let answer = 0; // 최종적인 답.
    let genStart = N - (9 * L); // 이 수 보다 작은 생성자는 없음.
    let M = genStart; // 시작 수 복사 (변경 가능)

    while (true) {
        M++; // 1씩 더해주면서 조건 살핌
        let sum = M; // 1씩 더해준 변수를 sum이라는 새로운 변수에 저장 (변경가능)

        for (let i = 0; i < String(M).length; i++) {
            sum = sum + Number(String(M).charAt(i)); // charAt(i)를 통해서 각 자릿수 숫자를 String형식으로 뽑아내고 Number를 통해 숫자로 바꿈.
        }

        if (sum === N) { // 탐색 중에 sum값이 주어진 입력값 N과 같으면 
            answer = M; // 최종적으로 답이 될 변수에 M값을 담고
            break; // 반복문 종료
        }
            
        if (M >= N) { // 만약 생성자가 없으면
            answer = 0; // 0
            break; // 반복문 종료
        }
    }
    console.log(answer);
}