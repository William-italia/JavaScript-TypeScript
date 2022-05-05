//capturar evento de submit do formulario
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
e.preventDefault();
const inputpeso = e.target.querySelector('#inputPeso');
const inputaltura = e.target.querySelector('#inputAltura');

const peso = Number(inputpeso.value);
const altura = Number(inputaltura.value);

if (!peso) {
    setResultado('Peso Invalido!', false);
    return;
} 

if (peso <= 45 || peso >= 500) {
    setResultado('Digite um peso valido!', false);
    return;
}

if (!altura) {
    setResultado('Altura Invalida', false);
    return;
} else if (altura <= 0.99 ) {
    setResultado('Digite uma Altura valida!', false);
    return;
}

const imc = getImc(peso, altura);
const nivelImc = getNivelImc(imc);

const msg = `Seu IMC é ${imc} (${nivelImc}).`;

setResultado(msg, true);
});

function getNivelImc (imc) {
    const nivel = 
    [
    'Abaixo do peso',
    'Peso Normal',  
    'Sobrepeso',
    'Obesidade grau 1', 
    'Obesidade grau 2', 
    'Obesidade grau 3'
    ];

    if (imc >= 39.9) { return nivel[5]; } 
    
    if (imc >= 34.9) { return nivel[4]; }
    
    if (imc >= 29.9) { return nivel[3]; } 
    
    if (imc >= 24.9) { return nivel[2]; } 
    
    if (imc >= 18.5) { return nivel[1]; } 
    
    if (imc < 18.5)  { return nivel[0]; }
}

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2); 
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const Resultado = document.querySelector('#resultado');
    Resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    Resultado.appendChild(p);
}