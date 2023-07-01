

let num1 = 10;
let num2 = 2.5;

console.log(num1.toString() + num2); // '10' + 2,5 = 102,5 (convertendo number para string)
console.log(num1.toString(2)); // converter para binario
console.log(num1.toFixed(2)); // casas decimais
console.log(Number.isInteger(num1)); // verificando se a variavel trata-se de um numero inteiro ou flutuante;
console.log(Number.isInteger(num2)); // verificando se a variavel trata-se de um numero inteiro ou flutuante;

console.log('--')
let temp = num1 * 'Olá'
console.log(Number.isNaN(temp));

num1 = num1.toString();
console.log(typeof num1);

let num01 = 0.7;
let num02 = 0.1;

num01 += num02; // 0.8
num01 += num02; // 0.9
num01 += num02; // 1.0
num01 += num02; // 1.1
num01 += num02; // 1.2
num01 += num02; // 1.3
num01 += num02; // 1.4
num01 += num02; // 1.5
num01 += num02; // 1.6
num01 += num02; // 1.7
num01 += num02; // 1.8
num01 += num02; // 1.9
num01 += num02; // 2.0


num01 = parseFloat(num01.toFixed(2));

console.log(num01);
console.log(Number.isInteger(num01));