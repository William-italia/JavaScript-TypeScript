const inputTarefa = document.querySelector('.novaTarefa');
const btnTarefa = document.querySelector('.btnAddTarefa');
const Tarefas = document.querySelector('.Tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
};

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    Tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
};

btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    };
});


function salvarTarefas() {
    const liTarefas = Tarefas.querySelectorAll('li');
    const listaDeTarefas = [];


    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJson = JSON.stringify(listaDeTarefas);
    localStorage.setItem('Tarefas', tarefasJson);
};

function adiconaTarefasSalvas() {
    const tarefas = localStorage.getItem('Tarefas');
    const listaDeTarefas = JSON.parse(tarefas)
    
    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adiconaTarefasSalvas();