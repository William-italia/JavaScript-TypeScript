/*
Aritméticos
+ soma
- subtração
/ divisão
* multiplicação
** potenciação
% resto da divisão
*/

const num1 = 5;
const num2 = 2;
const num3 = 10;

console.log((num1 + num2) * num3);
console.log(num1 + num2 * num3);

let contador = 0;
contador++;
contador--;
contador*=2;
contador**=2;
contador++;

console.log(contador);

const num01 = 10;
const num02 = parseFloat('5.2');

console.log(num01 + num02);
console.log(typeof num02);