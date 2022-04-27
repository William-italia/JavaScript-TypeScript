//           0123456789012345678901234567890123
let texto = "O Rato Roeu a Roupa Do Rei De Roma.";

// pega a letra com o indice desejado
console.log(texto[18]);
console.log(texto.charAt(7));
//concat serve para concatenar palavras ou seja adicionar 
console.log(texto.concat(' Em um lindo dia'));
// console.log(texto.indexOf('rei'));
// indexof serve para procurar letras especificas (indice)
console.log(texto.indexOf('ei', 18));
console.log(texto.lastIndexOf('o'));
console.log(texto.lastIndexOf('o', 30));

console.log(texto.match(/[a-z]/g));
console.log(texto.search(/i/));
// replace serve para escrever outra palavra em cima da que a gente escreveu na string inicial
console.log(texto.replace('Rei', 'Rainha'));
console.log(texto.replace(/R/g, 'L'));

//monstra quantas letras tem a string
console.log(texto.length);
console.log(texto.slice(2, 6));
console.log(texto.slice(-5));
// console.log(texto.slice(-5, texto.length - 1));
console.log(texto.slice(-5, -1));
console.log(texto.substring(texto.length - 5, texto.length - 1));


//faz um array com as plavras podendo escolher quantas palavras desejamos
console.log(texto.split(' ', 3));

//deixando as palavras em maiusculo e minusculo
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
