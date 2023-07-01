// let a = 'A';
// let b = 'B';
// let c = 'C';

// const letras = [b, c, a];
// [a, b, c] = letras;

// console.log(a, b, c);
//               0  1  2  3  4  5  6  7  8
/*
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const primeiroNumero = numeros[0];

const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero, terceiroNumero);
console.log(resto);
*/ 

const pessoa = {
    nome: 'William', 
    sobrenome: 'Itália',
    idade: 30, 
    endereco: {
        rua: 'Av São Paulo',
        numero: 320
    }
};

const { nome, sobrenome} = pessoa;
console.log(nome, sobrenome);

console.log(pessoa);