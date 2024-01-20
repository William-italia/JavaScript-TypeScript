// factory functions / constructor functions / classes


// --> Constructor Functions
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

const p1 = new Pessoa('William', 'Itália');
p1.nome = 'Outra coisa';
const p2 = new Pessoa('Livia', 'Gomes');
console.log(p1);
console.log(p2);

// --> Factory Functions
// function CreateClient(nome, sobrenome, idade) {
//     return {
//         nome, 
//         sobrenome,
//         idade,
//         get nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }

// const Client1 = CreateClient('William', 'Itália')
// console.log(Client1.nomeCompleto);

//////////////////////////////////////////////
// const pessoa = new Object();
// pessoa.nome = 'Luiz';
// pessoa.sobrenome = 'Miranda';
// pessoa.idade = 19;
// pessoa.falarNome = function() {
//     return (`${this.nome} está falando seu nome.`);
// };
// pessoa.getDataNascimento = function() {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// };

// // delete pessoa.nome;
// console.log(pessoa.falarNome());
// console.log(pessoa.getDataNascimento());

// for (let chave in pessoa) {
//     console.log(pessoa[chave]);
// }
//////////////////////////////////////////////
// console.log(pessoa[chave]);
// const pessoa = {
//     nome: 'Luiz',
//     sobrenome: 'Otavio',
// };

// const chave = 'nome';

// console.log(pessoa.nome);
// console.log(pessoa['sobrenome']);
// console.log(pessoa[chave]);