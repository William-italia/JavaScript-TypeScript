const form = document.querySelector('.form'); 

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Evento Previnido!');
    setResult('Olá mundo');
});

// functions

// Imprime o que é desejado na <div> com o id="resultado".
function setResult (msg) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = msg
}

// 

