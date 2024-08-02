function calculadora(num1, num2, op) {

    let resultado;

    switch (op) {
        case '+':
            resultado = `${num1} + ${num2} = ` + (num1 + num2);
            break;
        case '-':
            resultado = `${num1} - ${num2} = ` + (num1 - num2);
            break;
        case '*':
            resultado = `${num1} X ${num2} = ` + (num1 * num2);
            break;
        case '/':
            resultado = `${num1} / ${num2} = ` + (num1 / num2);
            break;
        default:
            resultado = `Numeros ou op invalidos`;
            break;
    }

    console.log(resultado);
    return resultado;

}

calculadora(2, 3, '+');


