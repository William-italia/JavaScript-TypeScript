// try {
// console.log(a);
// console.log('Abri um arquivo');
// console.log('Manipulei o arquivo e gerou erro');
// console.log('fechei o arquivo');
// } catch (e) {
//     console.log('tratando o erro');
    
// } finally {
//     console.log('finally: Sempre sou executado');

// }



function RetronaHora(hora) {
    if (hora && !(hora instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    } 

    if (!hora) {
        hora = new Date();
    }
    return hora.toLocaleTimeString('pt-BR', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'       
    });
}

try {
    const data = new Date('01-01-1970 13:50:43');
    const hora = RetronaHora(asikod);
    console.log(hora);
} catch(e) {
    const hora = new Date();
    console.log(hora);
    console.log('Está definido com a hora atual pois não foi informada uma data valida');
} finally {
    console.log('Tudo ok!');
}
