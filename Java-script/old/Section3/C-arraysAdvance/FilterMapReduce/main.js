// retorna a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (Somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosPares = numeros.filter((v) => v % 2 === 0);
// const DobrandoValor = numerosPares.map((v) => v * 2);
// const SomandoTudo = DobrandoValor.reduce((acumulador, valor) => {
//     acumulador += valor;
//     return acumulador;
// }, 0);

const numerosPares = numeros.filter((v) => v % 2 === 0).map((v) => v * 2).reduce((acumulador, v) => acumulador + v);


console.log(numerosPares);
// console.log(DobrandoValor);
// console.log(SomandoTudo)