function calculadoraImc() {

    const form = document.querySelector("#form");
    form.addEventListener('submit', receberForm);

    function receberForm(e) {
        e.preventDefault();

        const inputPeso = e.target.querySelector("#peso");
        const inputAltura = e.target.querySelector("#altura");

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        if(!validarCampos(altura, peso)) return;

        const imc = getIMC(altura, peso);   
        const nivel = getNivelImc(imc);

        const msg = `Seu imc é: ${imc}, ${nivel}`;

        setResultado(msg, true);
    }

    function limpaInput() {
        const inputPeso = document.querySelector("#peso");
        const inputAltura = document.querySelector("#altura");

        inputPeso.value = '';
        inputAltura.value = '';
        inputPeso.focus();
    }

    function validarCampos(altura, peso) {
        if (!peso && !altura) {
            setResultado("Digite valores validos", false);
            return false;
        }

        if(!peso) {
            setResultado("Digite um peso valido", false);
            return false;
        }

        if(!altura) {
            setResultado("Digite uma altura valida", false);
            return false;
        }

        return true;
    };

    function getIMC(altura, peso) {
        const imc = peso / altura ** 2;
        return imc.toFixed(2);
    };

    function getNivelImc(imc) {
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

        if (imc >= 39.9) return nivel[5];
        if (imc >= 34.5) return nivel[4];
        if (imc >= 29.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if (imc < 18.5) return nivel[0];
    };

    function criaP() {
        const p = document.createElement('p');
        p.classList.add('result');
        return p;
    }

    function setResultado(msg, isValid) {
        const resultado = document.querySelector('.resultado');
        resultado.innerHTML = '';

        const p = criaP();

        if(isValid){
            p.classList.add('success');
        } else {
            p.classList.add('bad');
        }

        p.innerHTML = msg;
        resultado.appendChild(p);
        limpaInput();
    }
}

calculadoraImc();