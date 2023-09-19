const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n').map(v=>v.split(' '));
let sum = 0.0;
function isGrade(grade) {
    let num = 0.0
    switch (grade) {
        case "A+" : 
            num = 4.5;
        case 'A0' : 
            num = 4.0;    
        case 'B+' : 
            num = 3.5;
        case 'B0' : 
            num = 3.0;
        case 'C+' : 
            num = 2.5;
        case 'C0' : 
            num = 2.0;    
        case 'D+' : 
            num = 1.5;
        case 'D0' : 
            num = 1.0;
        case 'F' : 
            num = 0.0;
        case 'P' :
            num = 0.0;    
        default :
            break;
    }
}

for (let i = 0; i < 20; i++) {
    sum += input[i].split(' ')[1] * 10 / 10;
}

console.log(sum);

// for (let i  = 0 ; i < 20; i++) {
//     console.log(grade);
//     console.log((num =nput[i].split(' ')[1] * 10)/10);
// }