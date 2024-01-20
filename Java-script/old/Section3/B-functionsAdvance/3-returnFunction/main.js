// return
// retorna um valor
// termina funçao
// function soma(a, b) {
//     return a + b;
// }              

// console.log(soma(2, 5));

// document.addEventListener('click', () => {
//     document.body.style.backgroundColor = 'red';
// });

// const createPerson = (nome, sobrenome) => {
//     return {nome, sobrenome};
// }

// const p1 = createPerson('william','italia');
// console.log(p1);

// const p2 = {nome: 'João', sobrenome: 'Oliveira'};
// console.log(p2);


// console.log(typeof p1);
// console.log(typeof p2);

// const FalaFrase = (comeco) => {
//     function falaresto(resto) {
//         return comeco + ' ' +resto;
//     }
//     return falaresto;
// }

// const OlaMundo = FalaFrase('Olá');
// console.log(OlaMundo('Mundo!'));

// function criaMultiplicador(multiplicador) {
//     // multiplicador
//     function multiplicacao(n) {
//         return n * multiplicador; 
//     }

//     return multiplicacao;  
// }

function criaMultiplicador(multiplicador) {
    // multiplicador
    return function(n) {
        return n * multiplicador; 
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
// function criaMultiplicador(multiplicador) {
//     // multiplicador
//     function multiplicacao(n) {
//         return n * multiplicador; 
//     }

//     return multiplicacao;  
// }const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));