const alunos = ['william','Livia','Henrique','Gabriela'];
console.log(alunos[0]);

alunos[0] = 'bill';
console.log(alunos[0]);
alunos[4] = 'joana';
console.log(alunos)

//monstra a quantidade de elementos no array
console.log(alunos.length);

// add ao array no fim
alunos.push('Otávio');

// add ao array no inicio
alunos.unshift('Luiza');

//removendo o ultimo elemento no array 
alunos.pop();
//removendo o primeiro elemento no array 
alunos.shift();

//pegando elementos especificos no array
console.log(alunos.slice(0, 2));

console.log(alunos);