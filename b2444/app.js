const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString();
const N = +input;
const star = '*';
const space = ' ';
// for (let i = 1; i <= 2*N-1; i++) {
//     if (i <= N) {
//         console.log(space.repeat(5-i) + star.repeat(2*i-1) + space.repeat(5-i));
//     } else if (i > N) {
//         console.log(space.repeat(i-5) + star.repeat(2*(2*N-i)-1) + space.repeat(i-5));
//     }
// }
for (let i = 1; i < N; i++) {
    console.log(space.repeat(N-i) + star.repeat(i+(i-1)));
}
for (let j = N; j > 0; j--) {
    console.log(space.repeat(N-j) + star.repeat(j+(j-1)));
}