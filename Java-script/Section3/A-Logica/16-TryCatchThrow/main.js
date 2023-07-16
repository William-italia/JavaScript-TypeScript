// try {
//     console.log(nome);
// } catch(error) {
//     console.log('Nome não existe');
// }

function soma(x, y) {
    if ( typeof x !== 'number' && typeof y !== 'number' ) {
        throw new ReferenceError('X e Y precisam ser números.');
    } else if (typeof x !== 'number') {
       throw new ReferenceError('X precisa ser um número.');
    } else if (typeof y !== 'number') {
        throw new ReferenceError('y precisa ser um número.');
    }
    return `A soma de ${x} + ${y} é igual a: ${x + y}`;
}


try {
    console.log(soma(1, 2));
    console.log(soma(1, 2));
} catch(error) {
    // console.log(error);
    Consolo.log('Algo está errado!')
}