// function saudacao(nome) {
//     // console.log(`Bom dia! ${nome}.`);
    
//     return `Bom dia! ${nome}.`;
// }

// saudacao('Jorgin');
// saudacao('Bill');
// saudacao('Robertin');

// const variavel = saudacao('Bill');
// console.log(variavel);

// function soma(x = 1, y = 1) {
//     const resultado = x + y;
//     return resultado;
// }

// console.log(soma(2, 2));
// console.log(soma(3, 3));
// console.log(soma(10, 5));
// console.log(soma(5, 10));
// console.log(soma('william', ' Itália'));

// const raiz = function (n) {
//     return n ** 0.5;
// };

//função de forma simplificada (se tiver somente um parametro podemos retirar o parenteses)
const raiz = (n) => { n ** 0.5 };
// const raiz = n => n ** 0.5;
// const raiz = (n) => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));