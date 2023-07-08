// const nome = 'Chartzin do grau';
const nomes = ["Ana", "João", "Maria", "Pedro", "Sofia"];


// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]);
// };

for (let i in nomes) {
    console.log(nomes[i]);
};
console.log('----------------------------------------');
for (let value of nomes) {
    console.log(value);
};

console.log('----------------------------------------');


nomes.forEach(function(valor, indice, array) {
    console.log(indice+':', valor+';', array);
});