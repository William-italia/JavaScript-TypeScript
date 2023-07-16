const nome = 'Roberto';

function falaNome() {
    console.log(nome);
}

function usaFuncaoFalaNome() {
    const nome = 'otavio'
    falaNome();
}

usaFuncaoFalaNome();