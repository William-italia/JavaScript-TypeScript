// const pessoA = {
//     nome: 'Luiz', 
//     Sobrenome: 'Miranda',
//     idade: 25
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.Sobrenome);

// function criaPessoa (nome, Sobrenome, idade) {
//     return {
//         nome: nome,
//         Sobrenome: Sobrenome,
//         idade: idade
//     };
// }

// function criaPessoa (nome, Sobrenome, idade) {
//     return { nome, Sobrenome, idade };
// }

// const pessoa = criaPessoa('Luiz', 'Otávio', 25);
// const pessoa2 = criaPessoa('Jorge', 'Pereira', 30);
// const pessoa3 = criaPessoa('Roberto', 'Carlos', 55);
// const pessoa4 = criaPessoa('Cleitinho', 'Silva', 12);
// const pessoa5 = criaPessoa('Felipe', 'Itália', 30);

// console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome, pessoa4.nome, pessoa5.nome);

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Mirando',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    },

    incrementaidade() {
        this.idade++;
    }
}

pessoa1.fala();