const numero = Number(prompt('Digite um número:'));

const Raiz = Math.sqrt(numero);
const Int = Number.isInteger(numero);
const Nan = Number.isNaN(numero);
const NumberFloor = Math.floor(numero);
const NumberCeil = Math.ceil(numero);
const fixed = numero.toFixed(2);


const titulo = document.getElementById('numero-titulo');

const raiz = document.getElementById('Raiz');
const Inteiro = document.getElementById('Inteiro');
const NaN1 = document.getElementById('NAN');
const Floor = document.getElementById('Arredondado-baixo');
const Ceil = document.getElementById('Arredondado-cima');
const Fixed = document.getElementById('duas-casas');


titulo.innerHTML = numero;

raiz.innerHTML = `Raiz Quadrada ${Raiz}`;
Inteiro.innerHTML = `${numero} é inteiro: ${Int}`;
NaN1.innerHTML = `É NaN: ${Nan}`;
Floor.innerHTML = `Arredondado para baixo ${NumberFloor}`;
Ceil.innerHTML =  `Arredondado para cima ${NumberCeil}`;
Fixed.innerHTML = `Com duas casas decimais: ${fixed}`;
