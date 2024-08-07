// const age = 11;

// if(age >= 18){
//     console.log('You can vote!');
// } else {
//     console.log("You can not vote!");
// }

// Using a ternary operator
age >= 18 ? console.log('You can vote!') : console.log("You can not vote!");
const canVote = age >= 18 ? "You can vote!" : "You can not vote!";
const canVote2 = age >= 18 ? true : false;

console.log(canVote);
// console.log(canVote2);

// multiple statements

const auth = true;
// let redirect;

// if (auth) {
//     console.log('Welcome to the dashboard');
//     redirect = '/dashboard';
// } else {
//     console.log('Acess Denied');
//     redirect = '/login'
// }

// const redirect = auth ? (console.log('welcome to the dashboard!'), '/dashboard') : (console.log('Acess Denied'), '/login');

// console.log(redirect);

// auth ? console.log('Welcome to the dashboard') : null;

auth && console.log('Welcome to the dashboard')