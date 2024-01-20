// Filter -> sempre retornar um array com a mesma quantidade de elementos ou menos que o array original;

// Retorne os números maiores que 10
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// function callbackFilter(valor, indice, array) {
//     return valor > 10;
// }
// const numerosMaior10 = numeros.filter(callbackFilter);
// const numerosFiltrados = numeros.filter((v, i, array) => {
    
    //     console.log(v, i, array);
    //     return v > 10;
    
    // });
// const numerosFiltrados = numeros.filter(v => v > 10);
// console.log(numerosFiltrados);


// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo o nome termina com a
const pessoas = [
    {nome: 'William', idade: 18},
    {nome: 'Maria', idade: 23},
    {nome: 'Edu', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasComMaisDe50 = pessoas.filter(obj => obj.idade > 50);
const nomesFinalizadosComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

console.log(nomesFinalizadosComA);