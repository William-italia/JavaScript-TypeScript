/*
FALSY
false
0
'' "" ``
null / undefined
NaN
*/

function falaOi () {
    return 'Oi'
}

let VaiExecutar = 'Roberto'

console.log(VaiExecutar && falaOi());

const corUsuario = 'verde';
const corPadrão = corUsuario || 'Preto';

console.log(corPadrão);