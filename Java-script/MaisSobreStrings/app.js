//           0123456789012345678901234567890123
let texto = "O Rato Roeu a Roupa Do Rei De Roma.";

console.log(texto[18]);
console.log(texto.charAt(7));
console.log(texto.concat(' Em um lindo dia'));
console.log(texto.indexOf('rei'));
console.log(texto.indexOf('ei', 18));
console.log(texto.lastIndexOf('o'));
console.log(texto.lastIndexOf('o', 30));

console.log(texto.match(/[a-z]/g));
console.log(texto.search(/i/));
console.log(texto.replace('Rei', 'Rainha'));
console.log(texto.replace(/R/g, 'L'));

console.log(texto.length);
console.log(texto.slice(2, 6));
console.log(texto.slice(-5));
// console.log(texto.slice(-5, texto.length - 1));
console.log(texto.slice(-5, -1));
console.log(texto.substring(texto.length - 5, texto.length - 1));

console.log(texto.split(' ', 3));

console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
