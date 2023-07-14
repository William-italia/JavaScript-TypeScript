console.log('-------------------------------------------------------------');
console.log('For of');
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for (let number of numbers) {
    
    if (number === 5 || number === 3) {
        console.log(`Pulei o numero: ${number}`);
        continue;
    }
    
    if (number === 10) {
        break
    }
    
    console.log(number);
    
};

console.log('-------------------------------------------------------------');
console.log('For classico');

let i = 0;

for (i; i < numbers.length; i++) {
    num = numbers[i];
    if (num === 5 || num === 3) {
        console.log(`Pulei o numero: ${num}`);
        continue;
    }
    
    if (num === 10) {
        break
    }
    
    console.log(num);
};

console.log('-------------------------------------------------------------');
console.log('While');


let iwhile = 0;

while (iwhile < numbers.length) {
    let num = numbers[iwhile];
    
    if (num === 5 || num === 3) {
        console.log(`Pulei o numero: ${num}`);
        iwhile++
        continue;
    }
    
    if (num === 10) {
        iwhile++
        break;
    }
    
    iwhile++
    console.log(num);
};

console.log('-------------------------------------------------------------');
console.log('doWhile');


let ido = 0;

do {
    let num = numbers[ido];

    if (num === 5 || num === 3) {
        console.log(`Pulei o numero: ${num}`);
        ido++
        continue;
    }

    if (num === 10) {
        console.log(`Chutei o ${num}`);
        ido++
        break;
    }

    ido++
    console.log(num);
} while (i < numbers.length);

console.log('-------------------------------------------------------------');
