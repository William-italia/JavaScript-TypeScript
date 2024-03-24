let x;
let d = new Date();

Math.sqrt();

x = d.toString();
x = d.getTime();
x = d.valueOf();

x = d.getFullYear();
x = d.getMonth() + 1;

x = d.getDate();

x = d.getDay();

x = d.getHours();

x = d.getMinutes();

x = d.getSeconds();

x = d.getMilliseconds();

x = Intl.DateTimeFormat('pt-BR').format(d);
x = Intl.DateTimeFormat('default', {month: 'long'}).format(d);

x = d.toLocaleString('default', {month: 'short'});

x = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/New_York'
});

console.log(x);