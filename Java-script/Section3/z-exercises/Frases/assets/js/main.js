const elementos = [
    {tag: 'p', texto: '"A vida sem reflexão não vale a pena ser vivida."'},
    {tag: 'p', texto: '"A imaginação é mais importante que o conhecimento."'},
    {tag: 'p', texto: '"A felicidade é a única coisa que podemos dar sem possuir."'},
    {tag: 'footer', texto: '"Penso, logo existo."'},
];

const container = document.querySelector('.container');
const elemento = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {

    let {tag, texto} = elementos[i];
    const criaTag = document.createElement(tag);
    const criaTexto = document.createTextNode(texto);
    criaTag.appendChild(criaTexto);
    elemento.appendChild(criaTag);
}   

container.appendChild(elemento);























// const container = document.querySelector('.container');
// const elemento = document.createElement('div');

// for (let i = 0; i < elementos.length; i++) {
//     let { tag, texto } = elementos[i];
//     let TagCriada = document.createElement(tag);
//     let textoCriado = document.createTextNode(texto);
//     // TagCriada.innerText = texto;
//     // TagCreate.innerHTML = texto;
//     TagCriada.appendChild(textoCriado);
//     // elemento.appendChild(TagCriada);
//     elemento.appendChild(TagCriada);
// }

// container.appendChild(elemento);