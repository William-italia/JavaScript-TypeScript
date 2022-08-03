// Objetec date

const three_clock = 60 * 60 * 3 * 1000;
const OneDay = 60 * 60 * 24 * 1000; 
const date = new Date(0 + three_clock + OneDay);
const date01 = new Date(0 + three_clock - OneDay);

console.log(date.toString());