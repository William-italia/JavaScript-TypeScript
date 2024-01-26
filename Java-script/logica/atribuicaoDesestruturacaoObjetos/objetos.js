const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30, 
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// atribuição via desestruturação
const { nome = 'Não existe', sobrenome, idade, endereco: {rua, numero}, endereco} = pessoa;
console.log(nome, sobrenome, idade, rua, numero, endereco);