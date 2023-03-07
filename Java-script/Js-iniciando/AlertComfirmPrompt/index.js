let num1 = prompt('Digite um numero:');
let num2 = prompt('Digite outro numero:');

num1 = Number(num1)
num2 = Number(num2)

const result = (num1 + num2)

if (!num1 || !num2) {
    alert('Digite os numeros');
} else {
    alert(`O resultado é ${result} \n o tipo do numero é ${typeof(num1, num2)}`);
}