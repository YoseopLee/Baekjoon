const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const [N, A] = require('fs').readFileSync(filePath).toString().split('\n').map(v=>+v);
let readIdx = 0;

let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];
let loc = { X : 0, Y : 2 };
function solution (table, t) {
    let cnt = t * t;
    let X = 0;
    let Y = 0;
    let nowDir = 0;
    let moveCnt = t;
    while (true) {
        if (nowDir === 1) {
            moveCnt--;
        }
        if (nowDir === 3) {
            moveCnt--;
        }

        for (let i = 0; i < moveCnt; ++i) {
            X = X + dx[nowDir];
            Y = Y + dy[nowDir];
            table[X][Y] = cnt--;

            if (table[X][Y] === A) {
                loc = {X, Y};
            }
        }

        if (cnt === 0) {
            return;
        }
        nowDir = (nowDir + 1) % 4;
    }
}
function main() {
    let table = new Array(N + 1);
    for (let i = 0; i < N + 1; i++) {
        table[i] = new Array(N).fill(0);
    }
    solution(table, N);
    for (let y = 1; y < N + 1; ++y) {
        let string = '';
        for (let x = 0; x < N; ++x) {
            if (x === N - 1) {
                string += table[x][y];
                break;
            }
            string += table[x][y] + ' ';
        }
        console.log(string);
    }
    console.log(loc.Y, loc.X + 1);
}
main();