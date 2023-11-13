function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let = estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        // value: estoque, // valor
        // writable: true, // pode alterar o valor
        enumerable: true, // mostra a chave
        configurable: false, // configuravel
        get: () => {
            return estoquePrivado;
        },
        set: (valor) => {
            if(typeof valor !== 'number') {
                throw new TypeError('Estoque só recebe valores do tipo number');
            }
            estoquePrivado = valor;
        }
    }); 
};

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
p1.estoque = 500;
console.log(p1.estoque);

