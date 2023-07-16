// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// const Letras = ['B', 'C', 'A'];
// [a, b, c] = Letras;

// console.log(a, b, c);


// ... -> rest, ... -> spread

//                  0     1     2     3     4     5     6     7     8
// const numbers = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [firstNumber, SecondNumber, ThirdNumber, ...resto] = numbers;
// const [um, , tres, , cinco, , sete, ...resto] = numbers;
// console.log(firstNumber, SecondNumber, ThirdNumber);
// console.log(um, tres, cinco);
// console.log(resto);

//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

// const [lista1, lista2, lista3] = numeros;
// const [,[, ,seis]] = numeros;

console.log(lista3[1]);
// console.log(numeros[2][1]);