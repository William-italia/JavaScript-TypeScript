const pessoa = {
    nome: 'Chart',
    sobrenome: 'Dennys',
    idade: 19
};

for (let chave in pessoa) {
    // console.log(chave, pessoa[chave]);
    console.log(`${chave}: ${pessoa[chave]};`);
};



// console.log(pessoa);
// console.log(pessoa['nome']);
// console.log(pessoa.nome);


// const frutas = [
//     "Maçã",
//     "Banana",
//     "Laranja",
//     "Abacaxi",
//     "Uva",
//     "Morango",
//     "Manga",
//     "Kiwi",
//     "Pêssego",
//     "Melancia"
// ];

// for (let i in frutas) {
//     console.log(`${i}: ${frutas[i]}` + (i < frutas.length -1 ? ',' : '.'));
// }