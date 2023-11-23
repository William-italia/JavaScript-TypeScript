function imprimirNoConsole() {
  console.log("Olá mundo!");
}

imprimirNoConsole();

function imprimirUmNumero(num) {
  console.log(`O numero é: ${num}`);
}

imprimirUmNumero(120);

const numeros = [1, 2, 3, 4, 5, 1000, 2100, 300, 2300, 500, 5000];

const maiorNumero = (array) => {
  const menorNumero = Math.min(...array);
  console.log(`O maior numero deste array é: ${Math.max(...array)}\nE o menor numero é: ${menorNumero}`);
}

maiorNumero(numeros);


// random gera um numero aleatório entre 0 e 1, porem se usar esta formula vc consegue definir um min e um max:
// Math.random() * (max - min) + min; 
const numeroAleatorio = () => {
  console.log(Math.round(Math.random() * (25 - 24) + 24));
};

numeroAleatorio();