// function funcao(a, b ,c) {
//     let total = 0;
//     for (let argument of arguments) {
//         total += argument;
//     }
//     console.log(total, a, b ,c);
// } 

// funcao(1, 2, 3, 4 ,5 , 6); // ele ignora completamente os parametros se não tiver parametros na construção da função/ mas para reverter isso podemos usar a variavel "arguments"

// function funcao(a, b = 0) {
//     // b = b || 0;
//     console.log(a + b,);
// }
// funcao(2);

// function funcao({ nome, sobrenome, idade }) {
//     console.log(nome, sobrenome, idade);
// }
// let obj = { nome: 'italia' , sobrenome: 'william', idade: 20 };
// funcao(obj);
// funcao({ nome: 'italia' , sobrenome: 'william', idade: 20 });


// function funcao([valor1, valor2, valor3]) {
//     console.log(valor1, valor2, valor3);
// }

// // let array = ['Luiz', 'Roberto', 30];
// // funcao(array);
// funcao(['Luiz', 'Roberto', 30]);

// function conta(operador, acumulador, numeros) {
//     console.log(operador, acumulador, numeros);
// }

// conta('+', 0, [20, 30, 40, 50]);

const conta = (operador, acumulador, ...numeros) => {
    for (let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
};
conta('+', 0, 20, 30, 40, 50);
