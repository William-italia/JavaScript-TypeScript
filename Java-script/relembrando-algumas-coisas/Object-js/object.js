// function criapessoa (nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// }

// const pessoa1 = criapessoa('William', 'Itália', 18);
// const pessoa2 = criapessoa('Lívia', 'Itália', 18);
// const pessoa3 = criapessoa('Henrique', 'Pereira', 17);
// const pessoa4 = criapessoa('Gabriela', 'Pereira', 18);
// const pessoa5 = criapessoa('Wallace', 'bispo', 17);
// const pessoa6 = criapessoa('Jessica', 'bispo', 17);

// console.log(`${pessoa1.nome} e ${pessoa2.nome}`);

const veiculo = {
    marca: 'Citroën',
    modelo: 'C3',
    cor: 'Prata',
    placa: 'Dws-7020',
 
    fala() {
        console.log(' Informações do veículo:');
        return  console.log(` Marca: ${this.marca},\n Modelo: ${this.modelo},\n cor: ${this.cor},\n placa: ${this.placa}`);
    },


};

veiculo.fala();

