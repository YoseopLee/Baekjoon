const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split(' ');
const ascending = input.map(v=>+v);
const descending = input.sort((a,b) => b - a).map(v=>+v);
if (ascending === [1, 2, 3, 4, 5, 6, 7, 8]) {
    console.log('ascending');
} else if (descending === [8, 7, 6, 5, 4, 3, 2, 1]) {
    console.log('descending');
} else {
    console.log('mixed');
}