// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// const somaNumeros = nums.reduce((i, num) => i + num);

// console.log(somaNumeros);

const cart = [
    { id: 1, name: 'Product 1', price: 130 },
    { id: 2, name: 'Product 2', price: 150 },
    { id: 3, name: 'Product 3', price: 175 },
];

const price = cart.price;
const valor = cart.reduce((acc, item) => acc + item.price, 0);

console.log(valor); // 455 