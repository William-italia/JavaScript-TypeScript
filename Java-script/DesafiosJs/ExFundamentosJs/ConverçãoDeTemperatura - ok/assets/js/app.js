// Celsius para Fahrenheit: (temperaturaCelsius * 9/5) + 32
// Fahrenheit para Celsius: (temperaturaFahrenheit -32) * 5/9


   function converterTemperatura() {
    const temperatura = parseFloat(document.getElementById('temperatura').value);
    const escala = document.getElementById('escala').value;
    const resultado = document.getElementById('resultado');


    if (isNaN(temperatura)) {
        resultado.innerHTML = 'Por Favor, digite uma temperatura válida!'
        return;
    }

    if (escala === 'celsius') {
        let Fahrenheit = (temperatura * 9/5) + 32;
        resultado.innerHTML = `${temperatura}º Celsius é igual a ${Fahrenheit.toFixed(2)}º Fahrenheit.`
        return;
    } else {
        let celsius = (temperatura -32) * 5/9;
        resultado.innerHTML = `${temperatura}º Fahrenheit é igual a ${celsius.toFixed(2)}º Celsius.`
        return;
    }
   }


   