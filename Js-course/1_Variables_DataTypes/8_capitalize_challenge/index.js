// const x =  new String('Hello world!');

// s = x.toUpperCase();
// s = x.toLowerCase();
// s = x.charAt(1);
// s = x.length;
// s = x.indexOf('!');
// s = x.substring(5, 12);
// s = x.slice(-6);

// l = '  Hello World!';

// l = l.trim();

// s = x.replace('world', 'pedro');
// s = x.valueOf();
// s = x.includes('Hell');

// console.log(l);


// s = x.split(''); 

// console.log(s);

const myString = 'developer';

let myNewString;

myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
myNewString = myString[0].toUpperCase() + myString.slice(1);
myNewString = `${myString[0].toUpperCase()}${myString.slice(-8)}`;

console.log(myNewString);