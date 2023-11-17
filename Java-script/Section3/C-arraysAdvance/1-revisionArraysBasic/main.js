const nomes = new Array('Eduardo', 'Maria', 'Joana');
nomes[2] = 'João';
delete nomes[2];


// const nomes = ['Eduardo', 'Maria', 'Joana', 'ualace', 'rosana'];
// const novo = nomes.slice(1, -2);
// const novo = [...nomes];

// novo.pop();
// novo.shift();
// nomes.push('Mariazinha do grau');
// nomes.unshift('ualace do grau');
// console.log(novo);
// console.log(nomes);
// console.log(nomes.length);
// console.log(novo);

// const nome = 'William Italia Nogueira';
// const nomes = nome.split(' ');

const nomes = ['William', 'Italia', 'Nogueira'];
const nome = nomes.join('-');
console.log(nome);