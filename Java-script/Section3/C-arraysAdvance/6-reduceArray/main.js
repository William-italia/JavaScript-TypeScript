// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function(acumulador, valor, indice, array) {
    // console.log(acumulador, valor);
    // if(valor % 2 == 0) acumulador.push(valor);
    // acumulador.push(valor * 2);
    acumulador += valor;
    return acumulador;
}, 0);
// }, [])
// console.log(total);

// retorne a pesso mais velha
const pessoas = [
    {nome: 'William', idade: 18},
    {nome: 'Maria', idade: 23},
    {nome: 'Edu', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const maisVelha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade ) return acumulador;
    return valor;
}, 0);

console.log(maisVelha);