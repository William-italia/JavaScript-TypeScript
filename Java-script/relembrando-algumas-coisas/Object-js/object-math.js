/*
Floor retorna o valor arredondado para baixo;
ceil retorna o valor arredondado para cima;
round retorna o valor arredondado para o número mais próximo;
*/ 


let num1 = 9.54;

/*
let num2 = Math.floor(num1);
let num3 = Math.ceil(num1);
let num4 = Math.round(num1);
*/

/*
Math
max = retorna o maior valor escrito
min = retorna o menor valor escrito
random = retorna um numero aleatório entre 0 e 1
*/ 

// console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6));
// console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6));

/*.ToFixed() formata o numero com o numero de casas desejado */
// console.log(Math.random().toFixed(2));

/* Retorna um valor aleatório entre 5 e 10*/
const aleatorio = Math.round(Math.random() * (20 - 15) + 15);
console.log(aleatorio);

/*
Outros:

Math.pow: Serve para realizar potenciação; 
obs: é relativamente inutil já que podemos utilizar o operador "**" para relealizar potenciação;
Ex: Console.Log(Math.pow(num1, 2));

Math.pi: Retorna o valor de pi:
let vlPI = Math.PI;
console.log(vlPI);
Return 3.141592653589793;

Math.sqrt(): retorna o valor da raiz desejada;
*/



