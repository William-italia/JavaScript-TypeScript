const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: '20',

    fala() {
        // console.log(`${this.nome} ${this.sobrenome}, está falando oi`);
        console.log(`${this.nome} ${this.sobrenome}, tem ${this.idade} atualmente`);
    },

    incrementaIdade() {
        this.idade++;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();



// function pessoa(nome, sobrenome, idade, cidade) {
//     return { nome, sobrenome, idade, cidade };
// }
// const pessoas = []; 
// const pessoa1 = pessoa('william', 'italia', 19, 'mongagua');
// const pessoa2 = pessoa('Livia', 'Gomes', 20, 'mongagua');
// const pessoa3 = pessoa('Vanessa', 'italia', 40, 'mongagua');
// pessoas.push(pessoa1, pessoa2, pessoa3);





// const pessoa1 = {
//     nome: 'william',
//     sobrenome: 'italia',
//     idade: '19',
//     cidade: 'Mongagua'
// }
// const pessoa2 = {
//     nome: 'livia',
//     sobrenome: 'gomes',
//     idade: '19',
//     cidade: 'Mongagua'
// }

// console.log(pessoa1, pessoa2);
