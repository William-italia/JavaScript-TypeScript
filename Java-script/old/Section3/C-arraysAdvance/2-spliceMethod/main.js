
//                 - 5     -4         -3         -2       -1
//                  0       1          2          3        4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(indice, delete, el1, el2, el3.....);
// pop

const removidos = nomes.splice(3, 2,  'Luiz', 'Joana', 'Roberto');
console.log(nomes, removidos); 