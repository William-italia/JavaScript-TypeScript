let numerosPrimos = [];

for(let numero = 2; numero <= 50; numero++) {
    let ePrimo = true;

    for(let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            ePrimo = false;
        }
    }

    if (ePrimo) {
        console.log(numero, "Primo")
        numerosPrimos.push(numero);
    } else {
        console.log(numero, 'Não é primo')
    }

}
console.log(numerosPrimos);