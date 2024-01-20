const raiz1 = n => n ** 0.5;

console.log(raiz(16));

const raiz2 = (n) => {
    return n ** 0.5;
};

console.log(raiz(16));

const raiz3 = function(num) {
    return num ** 0.5;
};

console.log(raiz(9));


function soma(x = 0, y = 0) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));
console.log(soma());


function saudacao(nome) {

    if (nome === undefined || nome === '' || nome === ' ') {
       return console.log(`Olá Humano!`);
    } else {
       return console.log(`Olá ${nome}!`);
    }
}

saudacao('d');
