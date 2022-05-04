//capturar evento de submit do formulario
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
e.preventDefault();
const inputpeso = e.target.querySelector('#inputPeso');
const inputaltura = e.target.querySelector('#inputAltura');

const peso = Number(inputpeso.value);
const altura = Number(inputaltura.value);

console.log(altura, peso);
if (!peso) {
    setResultado('Peso Invalido!', false);
    return;
}

if (!altura) {
    setResultado('Altura Invalida', false);
    return;
}

if (!altura && !peso) {
 setResultado('Altura e peso invalidos', false);
 return;
}
});

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const Resultado = document.querySelector('#resultado');
    Resultado.innerHTML = '';

    const p = criaP();
    Resultado.appendChild(p);
}