// construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;    
    this.sobrenome = sobrenome;    
}

Pessoa.prototype.nomeCompleto = function() { return this.nome + ' ' + this.sobrenome; }

// instâncicia
const p1 = new Pessoa('William', 'Itália');
const p2 = new Pessoa('Vanessa', 'Itália');
const data = new Date();

console.dir(p1);
console.dir(p2);
console.dir(data);''

console.dir(p1.nomeCompleto());