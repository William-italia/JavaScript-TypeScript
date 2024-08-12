const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');
const form = document.querySelector('form');
const body = document.querySelector('body');

// Adiciona um evento de clique ao botão
button.addEventListener('click', (e) => {
    alert('Button was clicked');
    e.stopPropagation();
});

// Adiciona um evento de clique à div
div.addEventListener('click', (e) => {
    alert('Div was clicked');
    e.stopPropagation();
});

// Adiciona um evento de clique ao formulário
form.addEventListener('click', (e) => {
    alert('Form was clicked');
    e.stopPropagation();

});

// Adiciona um evento de clique ao body
body.addEventListener('click', (e) => {
    alert('Body was clicked');
});
