function calculator(num1, num2, op) {
    let result;

    switch(op) {
        case '+': 
         result = `A soma de ${num1} + ${num2} = ` + (num1 + num2);
        break;
        case '-': 
         result = `A subtração de ${num1} - ${num2} = ` + (num1 - num2);
        break;
        case '*': 
         result = `A multiplicação de ${num1} * ${num2} = ` + (num1 * num2);
        break;
        case '/': 
         result = `A divisão entre ${num1} e ${num2} = ` + (num1 / num2);
        break;
        default: 
         result = `Invalid Operator`;
        break;
    }
    console.log(result);
    return result;
}

calculator(5, 2, '+') // returns 7
calculator(5, 2, '-') // returns 3
calculator(5, 2, '*') // returns 10
calculator(5, 2, '/') // returns 2.5
calculator(5, 2, '&') // returns an error message

