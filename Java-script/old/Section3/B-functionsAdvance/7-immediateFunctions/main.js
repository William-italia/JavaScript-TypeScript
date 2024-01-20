// IIFE ==> Immediately invoked function expression

// function qllrCoisa() {
//     console.log(123123123);
// }

(function (idade, peso, altura) {
    const sobrenome = 'Carlos'
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Roberto'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(70, 90, 1.80);