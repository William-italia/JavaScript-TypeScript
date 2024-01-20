// declarção de função
falaOi();
function falaOi() {
    console.log('Fala oi');
};

// First-class objects (objetos de primeira classe)
// function expression
const SouUmDado = function() {
    console.log('Sou um dado.');
};

// function executaFuncao(funcao) {
//     console.log('Vou executar sua função abaixo:')
//    funcao();
// }
// executaFuncao(SouUmDado);

// arrow function
const arrowFun = () => {
    console.log('Sou uma arrow function');
};
arrowFun();

// dentro de um objeto
// const obj = {
//     falar: function() {
//         console.log('Estou falando!');
//     }
// }

const obj = {
    falar() {
        console.log('Estou falando!');
    }
}

obj.falar();