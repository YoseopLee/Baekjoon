const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(v=>v.split(' '));

let sum = 0;
let total = 0;

for(let [sub, score, grade] of input) {
   
    let num = 0;
    
    if(grade==='A+') {
        num = 4.5
    }else if(grade==='A0') {
        num = 4.0
    }else if(grade==='B+') {
        num = 3.5
    }else if(grade==='B0') {
        num = 3
    }else if(grade==='C+') {
        num = 2.5
    }else if(grade==='C0') {
        num = 2 
    }else if(grade==='D+') { 
        num = 1.5 
    }else if(grade==='D0') {
        num = 1
    }else if(grade==='P') {
        continue;
    }
    total += Number(score)*num
    sum += Number(score);
}
console.log(total/sum);