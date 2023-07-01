// const name01 = 'Luiz';
// const lastname01 = 'Otávio';
// const old01 = 20;

// const name02 = 'William';
// const lastname02 = 'Italia';
// const old02 = 18;

// const name03 = 'Livia';
// const lastname03 = 'gomes';
// const old03 = 19;

// const person = {
//  name: 'Luiz',
//  lastname: 'Otávio',
//  old: 25
// };

// console.log(person);
// console.log(person.name);
// console.log(person.lastname);
// console.log(person.old);

// function createPerson (name, lastname,old) {
//     const person = {
//         name: name,
//         lastname: lastname,
//         old: old
//     };
//     return `My firstname is ${name} and my lastname is ${lastname}, i ${old} years old.`;
// }

// function createPerson (name, lastname,old) {
//     return { name, lastname, old };
// }

// const person1 = createPerson('William', 'Italia', 18 );
// const person2 = createPerson('Vanessa', 'Italia', 38);
// const person3 = createPerson('Livia', 'Gomes', 19);

// console.log(person1.name, person2.name);

// const person1 = {
//     name: 'Luiz',
//     lastname: 'Otávio',
//     old: 25, 

//     fala () {
//         console.log(`${this.name} ${this.lastname} está falando oi...`);
//         console.log(`Minha idade atual é ${this.old}.`);
//     },
//     incrementOld() {
//         this.old++;
//     }
// }

// person1.fala();
// person1.incrementOld();
// person1.fala();


function createPerson(name, lastname, weight, height) {

    const person = {
        name,
        lastname,
        weight,
        height
    };

    return `${name}${lastname}${weight}${height}`
}

createPerson('william', 'italia', '90', '1.80');