let x;
const num = new Number(5);

x = num.toString();

x = num.toString().length;

x = num.toFixed(2);

x = num.toPrecision(3);

x = num.toExponential(2);

x = num.toLocaleString('ar-EG');

console.log(typeof num, x);