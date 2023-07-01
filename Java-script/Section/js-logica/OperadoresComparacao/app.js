/*
Operadores de comparação

> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade
=== igualdade estrita (verifica valor e tipo)
!= diferente (valor)
!== diferente estrito (valor e tipo)
*/

/*
Operadores logicos 

&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU -> 
! -> NOT -> NÃO -> 
falsy values: 
false,
0,
"" `` '',
null / undefined,
NaN;
*/ 
usuario = 'Luiz';
const senha = '12345';

const login = usuario === 'Luiz' && senha === '12345';
console.log(login);
