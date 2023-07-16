// função contrutora -> objetos
// funcao fabrica -> objetos
// construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
    // atributos ou metodos privados
    const ID = 123456;
    const metodoInterno = function() {

    };

    // atributos ou metodos públicos
    this.nome = nome
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': Linda');
    };
}

const p1 = new Pessoa('William', 'Itália');
const p2 = new Pessoa('Livia', 'Gomes');
p2.metodo();


