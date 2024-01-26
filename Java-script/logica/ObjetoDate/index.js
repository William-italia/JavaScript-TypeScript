// const data = new Date();
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1);
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia Semana', data.getDay()); // 0 - domingo, 1 - segunda, 2 - terça, 3 - quarta, 4 - quinta, 5 - sexta, 6 - Sábado
// console.log(data.toString());

function formataData() {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const Seg = zeroEsquerda(data.getSeconds());
    const ms = zeroEsquerda(data.getMilliseconds());

    return console.log(`${dia}/${mes}/${ano}, ${hora}:${min}:${Seg}:${ms}`);
}

function zeroEsquerda(num) {
   return num >= 10 ? num : `0${num}`;
}

const data = new Date();
const dataBrasil = formataData(data);