// const dataPosterior = new Date(0); //data igual ou posterior a: 01/01/1970 
// const dataAnterior = new Date(-0); //Data anterior a: 01/01/1970 

// const data = new Date(); // ano, mes, dia, hora, minuto, segundo, milisegundo
// const data = new Date('2023-07-20T20:20:29');
// const data = new Date(1688245056074);

// console.log('Dia:', data.getDate());
// console.log('Mês:', data.getMonth() + 1);
// console.log('Ano:', data.getFullYear());
// console.log('Hora:', data.getHours());
// console.log('Min:', data.getMinutes());
// console.log('Seg:', data.getSeconds());
// console.log('ms:', data.getMilliseconds());
// console.log('Dia Semana:', data.getDay());
// console.log(data.toString());
// console.log(Date.now());

function ZeroE(num) {
    return num >= 10 ? num : `0${num}`;
}

function FormataData(data) {
    const dia = ZeroE(data.getDate());
    const mes = ZeroE(data.getMonth() + 1);
    const ano = ZeroE(data.getFullYear());
    const hora = ZeroE(data.getHours());
    const minuto = ZeroE(data.getMinutes());
    const segundo = ZeroE(data.getSeconds());
    const ms = ZeroE(data.getMilliseconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo} ms:${ms}`;
}

const data = new Date();
const dataBrasil = FormataData(data);
console.log(dataBrasil);