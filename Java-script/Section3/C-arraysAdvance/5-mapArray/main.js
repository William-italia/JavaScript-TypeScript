// dobre os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const NumerosEmDobro = numeros.map((v, i, Array) => {
    return v * 2;
});

// console.log(NumerosEmDobro);


// para cada elemento:
// retorne apenas uma string com o nome da pessoa
// remova apenas a chave "nome" do obj
// adicione uma chave id em cada obj
const pessoas = [
    {nome: 'William', idade: 18},
    {nome: 'Maria', idade: 23},
    {nome: 'Edu', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const nomes = pessoas.map((obj) => obj.nome);
const idades = pessoas.map((obj) => ({idade: obj.idade}));
const id = pessoas.map((obj, i) => {
    const newobj = {...obj};
    newobj.id = i +1;
    return newobj;
});

console.log(pessoas);
console.log(id);