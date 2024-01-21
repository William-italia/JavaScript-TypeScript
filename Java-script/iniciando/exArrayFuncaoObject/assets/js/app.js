function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    // form.addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     alert("Evento previnido");
    // });

    const pessoas = [];

    function limparCampos() {
        form.querySelectorAll('input').forEach(input => input.value = ''); 
        form.querySelector('.nome').focus();
    }

    function validarCampos() {
        const inputs = form.querySelectorAll('input');
        for (const input of inputs) {
            if(input.value.trim() === '') {
                return false;
            }
        }
        return true;
    }

    // function validarCampos() {
    //     const inputs = form.querySelectorAll('input');
    //     for (const input of inputs) {
    //         console.log('Valor do input:', input.value.trim());
    //         if (input.value.trim() === '') {
    //             return false;
    //         }
    //     }
    //     return true;
    // }

    function recebeEventoForm(e) {
        e.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        

        if(!validarCampos()) {
            return alert("Digite todos os campos corretamente");
        } else {
            pessoas.push({
                nome: nome.value,
                sobrenome: sobrenome.value,
                peso: peso.value,
                altura: altura.value
            });
    
            console.log(pessoas);
            resultado.innerHTML += `<p><span class="Teste">${nome.value} </span>${sobrenome.value} ${peso.value} ${altura.value}</p>`
            limparCampos();
        }
    }
    
    form.addEventListener('submit', recebeEventoForm);

}
meuEscopo();