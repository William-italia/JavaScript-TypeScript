// novo array com a propriedade name que vai conter o nome e o sobrenome juntos em uma unica string, fora a isso teremos a propriedade email, para pessoas com 25 ou menos de 25 anos;

const people = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        phone: '111-111-1111',
        age: 30,
    },
    {
        firstName: 'Jane',
        lastName: 'Poe',
        email: 'jane@gmail.com',
        phone: '222-222-2222',
        age: 25,
    },
    {
        firstName: 'Bob',
        lastName: 'Foe',
        email: 'bob@gmail.com',
        phone: '333-333-3333',
        age: 45,
    },
    {
        firstName: 'Sara',
        lastName: 'Soe',
        email: 'Sara@gmail.com',
        phone: '444-444-4444',
        age: 19,
    },
    {
        firstName: 'Jose',
        lastName: 'Koe',
        email: 'jose@gmail.com',
        phone: '555-555-5555',
        age: 23,
    },
];

// const persons = people.map((person) => {
//     return {
//         name: person.firstName + ' ' + person.lastName,
//         email: person.email,
//         age: person.age
//     }
// }).filter((person) => person.age <= 25);


const youngPeople = people
    .filter((person) => person.age <= 25)
    .map((person) => ({
        name: person.firstName + ' ' + person.lastName,
        email: person.email
    }))
console.log(youngPeople);

const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers
    .filter((number) => number > 0)
    .reduce((acc, num) => acc + num, 0);

console.log(positiveSum);


const words = ['coder', 'programmer', 'developer'];

const capitalizedWords = words.map((word) => word[0].toUpperCase() + word.slice(1)); // word.slice(1, word.length)

console.log(capitalizedWords); // ['Coder', 'Programmer', 'Developer']