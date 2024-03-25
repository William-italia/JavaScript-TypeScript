// &&, ||, !, ??

// ?? devolve o valor a direita caso o valor da esquerda seja null ou undefined, caso contrario retorna o valor da direita
let c;    

c = null ?? 30;
c = undefined ?? 30;
c = 10 ?? 30;

console.log(c);

let a = 20;

a ||= 10;

console.log(a);

let b = 20;

b &&= 30;

console.log(b);

let d = null;

d ??= 40;

console.log(d);