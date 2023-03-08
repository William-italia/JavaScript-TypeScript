// functions
function setResult (msg) {
    const resultado = document.querySelectorAll('.resultado');
    resultado.innerHtml = msg;
}

const form = document.querySelector('.form'); 

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Evento Previnido!');
    setResult('Olá mundo');
});

