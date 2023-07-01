// Objetec date

// const three_clock = 60 * 60 * 3 * 1000;
// const OneDay = 60 * 60 * 24 * 1000; 
// const date = new Date(0 + three_clock + OneDay);
// const date01 = new Date(0 + three_clock - OneDay);

// const date = new Date(2004, 6, 20, 15, 14, 27, 500); // a, m, d, H, M, S, Ms

// console.log(date.toString());

// const  data = new Date('2004-07-20 20:20:59');
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() +1);
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia semana', data.getDay());

function zero(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
const Dia = zero(data.getDate());    
const Mes = zero(data.getMonth() +1);   
const Ano = zero(data.getFullYear());   
const Hora = zero(data.getHours());   
const Min = zero(data.getMinutes());   
const Seg = zero(data.getSeconds());  

return `${Dia}/${Mes}/${Ano} ${Hora}:${Min}:${Seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);