
    // form.onsubmit = function (e) {
    //     e.preventDefault();
    //     alert(1);
    //     console.log(`was send`);
    // };

function meuEscopo () {
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');
    const person = [];
    
    function recebeEventoForm (e) {
        e.preventDefault();

       const nome = form.querySelector('#nameF');
       const sobrenome = form.querySelector('#lastName');
       const peso = form.querySelector('#weight');
       const altura = form.querySelector('#height');

       person.push({
        nameF: nameF.value,
        lastName: lastName.value,
        weight: weight.value, 
        height: height.value 
       });

        result.innerHTML += `<p class="R">${nameF.value} ${lastName.value} ${weight.value} ${height.value}</p>`;
    };

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
