const numero = Number(prompt('Digite seu número:'));

let raizT = numero ** 0.5;
let intT = Number.isInteger(numero);
let NaNT = Number.isNaN(numero);
let baixoT = Math.floor(numero);
let cimaT = Math.ceil(numero);
let decimalT = numero.toFixed(2);

const titulo = document.getElementById('numero-titulo');
const raiz = document.getElementById('raiz');
const int = document.getElementById('int');
const Nan = document.getElementById('NaN');
const baixo = document.getElementById('baixo');
const cima = document.getElementById('cima');
const decimal = document.getElementById('decimal');

titulo.innerHTML = numero;
raiz.innerHTML = raizT;
int.innerHTML = `${numero} é inteiro: ${intT}`
Nan.innerHTML = NaNT;
baixo.innerHTML = baixoT;  
cima.innerHTML = cimaT;
decimal.innerHTML = decimalT;