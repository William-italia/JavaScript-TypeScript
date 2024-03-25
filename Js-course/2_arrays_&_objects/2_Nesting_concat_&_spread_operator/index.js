let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// fruits.push(berries);

// x = fruits[3][0];

const allFruits = [fruits, berries];

x = allFruits[0][2];

x = fruits.concat(berries);
// spread operatos (...)
x = [...fruits, ...berries];

// flatten arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat();

// static methods on array object
x = Array.isArray(fruits);

x = Array.from('12345');

const a = 5;
const b = 10;
const c = 15;

x = Array.of(a, b, c);

console.log(x);
