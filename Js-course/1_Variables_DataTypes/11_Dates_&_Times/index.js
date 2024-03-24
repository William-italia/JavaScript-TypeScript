let d;

d = new Date();

d = d.toString();

d = new Date(2024, 3, 14, 12, 25, 0);

d = new Date('2021-04-14T09:30:12');
d = new Date('07/10/2021 12:30:00');
d = new Date('2022-07-10');
d = new Date('07-10-2022');

d = Date.now();
d = new Date('07-10-2023 12:30:00');
d = d.getTime();
d = d.valueOf();

d = new Date(1689003000000);

d = Math.floor(Date.now() / 1000);

console.log(d);