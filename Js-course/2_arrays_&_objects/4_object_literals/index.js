let x;

const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address: {
        street: '123 Main st',
        city: 'Boston',
        state: 'MA',
    }, 
    hobbies: ['music', 'sports']
};

// x = person['age'];
// X = person.address;
// x = person.address.street
// x = person.hobbies[0]

person.name = 'Jane Doe';
person['isAdmin'] = false;

x = person.name;
x = person.isAdmin;

delete person.age;

person.hasChildren = true;
person.greet = function () {
    let x = console.log(`Hello, my name is ${this.name}`);
    return x
}


x = person.greet();

console.log(x);