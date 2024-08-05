// const li = document.createElement('li');
// li.id = 'my-element';
// li.className = 'item';
// li.setAttribute('title', 'My Element');

// const button = document.createElement('button');
// button.className = 'remove-item btn-link text-red';
// button.innerHTML = '<i class="fa-solid fa-xmark"></i>';


// const text = document.createTextNode('Banana');
// li.appendChild(text);

// li.appendChild(button);

// document.querySelector('#item-list').appendChild(li);

document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('#item-form');
    const itemInput = document.querySelector('#item-input');
    const itemList = document.querySelector('#item-list');
    const clearAll = document.querySelector('#clear');
    const filter = document.querySelector('#filter');


    form.addEventListener('submit', handlFormSubmit);

    clearAll.addEventListener('click', clearAllF);

    itemList.addEventListener('click', itemRemoveF);

    filter.addEventListener('input', filterF);

    VerificaOestadoDaLista(itemList);

    function addItemToList(item) {

        const li = document.createElement('li');
        li.className = 'item';

        const button = document.createElement('button');
        button.className = 'remove-item btn-link text-red';
        button.innerHTML = '<i class="fa-solid fa-xmark"></i>';

        const text = document.createTextNode(item);

        li.appendChild(text);
        li.appendChild(button);

        itemList.appendChild(li);

        VerificaOestadoDaLista(itemList);
    }

    function handlFormSubmit(e) {

        e.preventDefault();

        const newItem = itemInput.value.trim();

        if (newItem) {
            addItemToList(newItem);

            itemInput.value = '';
        }

    }

    function itemRemoveF(e) {
        const removeButton = e.target.closest('.remove-item');

        if (removeButton) {
            const itemToRemove = removeButton.closest('li');

            if (itemToRemove) {
                itemToRemove.remove();
            }
        }

        VerificaOestadoDaLista(itemList);
    }

    function VerificaOestadoDaLista(lista) {
        if (lista.innerHTML.trim() === '') {
            clearAll.style.display = 'none';
        } else {
            clearAll.style.display = 'inline-block';
        }
    }

    function clearAllF() {
        itemList.innerHTML = '';

        VerificaOestadoDaLista(itemList);
    }

    function filterF() {
        const filterText = filter.value.toLowerCase();
        const items = itemList.querySelectorAll('li');

        items.forEach(item => {
            const itemText = item.textContent.toLowerCase();

            if (itemText.includes(filterText)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        })

    }
});