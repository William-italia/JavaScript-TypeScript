function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        },
        estoque: {
            enumerable: true,
            value: estoque,
            writable: true,
            configurable: true
        },
    });
}

const p1 = new Produto('Calça', 100, 15);
console.log(p1);



// teste







// // DefineProperty - DefineProperties
// function Produto(nome, preco, estoque) {
//     this.nome = nome;
//     this.preco = preco;
    // Object.defineProperty(this, 'estoque', {
    //     enumerable: true, // mostra a chave
    //     value: estoque, // valor
    //     writable: true, // pode alterar o valor
    //     configurable: false // configuravel
    // }); 

    // Object.defineProperty(this, 'estoque', {
    //     enumerable: true, // mostra a chave
    //     value: function() {
    //         return estoque;
    //     }, // valor
    //     writable: false, // pode alterar o valor
    //     configurable: true // configuravel
    // }); 
// }
// const p1 = new Produto('Camiseta', 70, 8);

// console.log(Object.keys(p1));


// for (let chave in p1) {
//     console.log(chave);
// }

// p1.estoque = 50000;
// console.log(p1.estoque());