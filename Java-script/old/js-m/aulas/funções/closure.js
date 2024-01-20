function lembrarSoma(x) {
    return function(y) {
        return x + y;
}
}

let soma1 = lembrarSoma(2)
console.log(soma1(4));

let soma2 = lembrarSoma(10);
console.log(soma2(12))

function contador(i) {
let cont = i;
let meuContador = function() {
    console.log(cont);
    cont++
}
return meuContador;
}

let meuContador = contador(5);
meuContador();
meuContador();
meuContador();
meuContador();
meuContador();
meuContador();
