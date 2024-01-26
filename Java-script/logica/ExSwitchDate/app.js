// function calendario() {

//     const h1 = document.querySelector('.container > h1');
//     const data = new Date();

//     criaData(data);

//     function getDayWeekText(dayWeek) {
//         // let getDayWeekText;
        
//         // switch(dayWeek) {
//         //     case 0: 
//         //     getDayWeekText = 'Domingo';
//         //     break;
//         //     case 1: 
//         //     getDayWeekText = 'Segunda-Feira';
//         //     break;
//         //     case 2: 
//         //     getDayWeekText = 'Terça-Feira';
//         //     break;
//         //     case 3: 
//         //     getDayWeekText = 'Quarta-Feira';
//         //     break;
//         //     case 4: 
//         //     getDayWeekText = 'Quinta-Feira';
//         //     break;
//         //     case 5: 
//         //     getDayWeekText = 'Sexta-Feira';
//         //     break;
//         //     case 6: 
//         //     getDayWeekText = 'Sabado';
//         //     break;
//         // }
//         // return getDayWeekText;
//         const diaSemana = ['Domingo','Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado']
//         return diaSemana[dayWeek];
//     }
//     function getMonthText(month) {
//        const numeroMes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
//        return numeroMes[month];
//     }
//     function zeroRight(num) {
//         return num >= 10 ? num : `0${num}`;
//     }
//     function criaData(data) {
//         const diaSemana = data.getDay();
//         const numeroMes = data.getMonth();

//         const diaSemanaTexto = getDayWeekText(diaSemana);
//         const numeroMesTexto = getMonthText(numeroMes);

//         return h1.innerHTML = `${diaSemanaTexto}, ${zeroRight(data.getDate())} de ${numeroMesTexto} de ${data.getFullYear()} as ${zeroRight(data.getHours())}:${zeroRight(data.getMinutes())}`;
//     } 
// }

// calendario();


const h1 = document.querySelector('.container > h1');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full'}) + ` as ${data.getHours()}:${data.getMinutes()}`;
