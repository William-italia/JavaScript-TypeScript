const items = ['book', 'table', 'chair', 'kite'];
const users = [

    { name: 'Brad' },
    { name: 'Kate' },
    { name: 'Steve' }


];

// for (const item of items) {
//     console.log(item);
// }
// for (const user of users) {
//     console.log(user.name);
// }

// const str = 'Hello World!';

// for (const letter of str) {
//     console.log(letter);
// }

// const map = new Map();
// map.set('name', 'john');
// map.set('age', '30');

// for (const [key, value] of map) {
//     console.log(key, value);
// }

// for in

const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'yellow',
    color4: 'green',
};

for (const key in colorObj) {
    console.log(key, colorObj[key]);
}

const colorArr = ['red', 'blue', 'yellow', 'green'];

for (const key in colorArr) {
    console.log(key, colorArr[key]);
}