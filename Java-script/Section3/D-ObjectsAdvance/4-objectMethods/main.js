/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spreed)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.DefineProperties (define várias propriedades)
Object.DefineProperty (define uma unucia propriedade)
*/

// const caneca = Object.assign({}, produto, {material: 'porcelana'});
// const caneca = {...produto, material: 'Porcelana'};
// const caneca = {nome: produto.nome, preco: produto.preco};
// Object.freeze(produto);
const produto = {nome: 'produto', preco: 10, material: 'porcelana'};
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// console.log(Object.values(produto))
console.log(Object.entries(produto))


// for(let entry of Object.entries(produto)) {
//     console.log(entry);
// }

for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}