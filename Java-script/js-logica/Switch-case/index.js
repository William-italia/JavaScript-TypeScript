function getDayText (diaSemana) {

    let diaSemanaTexto;


    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-Feira';
        return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-Feira';
        return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-Feira';
        return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-Feira';
        return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-Feira';
        return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
        return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
        return diaSemanaTexto;
    }
 
}

const data = new Date('1987-04-20 00:00:00');
const diaSemana = data.getDay();
const diaSemanaTexto = getDayText(diaSemana);

console.log(diaSemana, diaSemanaTexto);






// diaSemana = 7;

// if (diaSemana === 0) {
//     console.log('Domingo');
// } else if (diaSemana === 1) {
//     console.log('Segunda-Feira');
// } else if (diaSemana === 2) {
//     console.log('Terça-Feira');
// }  else if (diaSemana === 3) {
//     console.log('Quarta-Feira');
// }  else if (diaSemana === 4) {
//     console.log('Quinta-Feira');
// }  else if (diaSemana === 5) {
//     console.log('Sexta-Feira');
// }  else if (diaSemana === 6) {
//     console.log('Sábado');
// }  else { diaSemana = ' ' }

// switch (diaSemana) {
//     case 0:
//         diaSemanaTexto = 'Domingo';
//     break;
//     case 1:
//         diaSemanaTexto = 'Segunda-Feira';
//     break;
//     case 2:
//         diaSemanaTexto = 'Terça-Feira';
//     break;
//     case 3:
//         diaSemanaTexto = 'Quarta-Feira';
//     break;
//     case 4:
//         diaSemanaTexto = 'Quinta-Feira';
//     break;
//     case 5:
//         diaSemanaTexto = 'Sexta-Feira';
//     break;
//     case 6:
//         diaSemanaTexto = 'Sábado';
//     break;
//     default:
//         diaSemanaTexto = '';
//     break;
// }