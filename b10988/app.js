const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();
const isFel = (s) => {
    let reversed = s.split('').reverse().join('');
    if (s===reversed) {
        return true;
    }
    return false;
}
console.log(isFel(input) === true ? 1 : 0);