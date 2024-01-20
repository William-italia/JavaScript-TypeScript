// const veiculo = {

//     marca: "citroen",
//     modelo: "c3",
//     cor: "prata",
//     placa: "dws-6088",

//     fala() {
// console.log(`Marca do carro: ${this.marca} \n Modelo do carro: ${this.modelo} \n cor do carro: ${this.cor} \n placa do carro ${this.placa}`);
//     }

// };

// veiculo.fala();

// function criapessoa (nome, sobrenome, idade) 
// {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     }
// }

// const pessoa1 = criapessoa('joana', 'dark', 18);
// console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1. idade );

function pessasDados (nome, sobrenome, idade, cpf) {

    return {
        nome: nome, 
        sobrenome: sobrenome, 
        idade: idade, 
        cpf: cpf
    }
}

const dadosPessoais = pessasDados('william', 'italia', 18, 12341234 );
console.log(dadosPessoais);