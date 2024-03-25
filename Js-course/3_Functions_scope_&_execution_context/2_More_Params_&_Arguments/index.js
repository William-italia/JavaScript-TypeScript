// Default Params
function registerUser(user = 'Bot') {

    return user + ' is registered';
}

  

console.log(registerUser());

//Rest Params
function sum(...nums) {
    let total = 0;

    for(const number of nums) {
        total += number;
    }

    return total;
}

console.log(sum(1, 2 ,3, 4));

// Objects as params
function loginUser(user) {
    return `The user ${user.name} width the id of ${user.id} is logged in`;
}

const user = {
    id: 1,
    name: 'Felipe'
}


console.log(loginUser(user));
console.log(loginUser({ id: 2, name: 'Marcelo' }));

//Arrys as params
function randomNumber(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];
    console.log(item);
}

randomNumber([1, 2, 3, 4, 5 ,6 ,7 ,8 ,9, 10]);