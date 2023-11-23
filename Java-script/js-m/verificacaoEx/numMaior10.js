let num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = num.filter((valor) => {
  return valor > 10;
});

console.log(numerosFiltrados);
// let numMaior10 = [];

// for (let i in num) {
//   if (num[i] > 10) {
//     numMaior10.push(num[i]);
//   }
// }

// console.log(numMaior10);