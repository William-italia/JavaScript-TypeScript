const form = document.querySelector('.form'); 

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    const imc = getIMC(peso, altura );

    if (!peso || !altura   ) {
        console.log('Digite apenas numeros');
        setResult('Peso ou Altura Inválidos!', false)
        return
    } else {
        return setResult(`valor do Imc: ${imc}`);
    }
});


function getIMC(peso, altura) {
    return imc = peso / altura ** 2;
}

function createParagraph (className) {
    const p = document.createElement('p');
    return p;
}

function setResult (msg, isValid) {
    const result = document.querySelector('.resultado');
    result.innerHTML = ''; 

    const p = createParagraph();
    // p.classList.add('paragrafo-resultadov')
    p.innerHTML = msg;
    result.appendChild(p)
}

