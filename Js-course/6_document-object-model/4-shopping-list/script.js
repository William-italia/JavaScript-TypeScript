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
// function insertBeforeItem() {
//     const ul = document.querySelector('ul');

//     const li = document.createElement('li');

//     li.textContent = 'inserindo antes';

//     const terceiroItem = document.querySelector('li:nth-child(3)');

//     ul.insertBefore(li, terceiroItem);

// }

// function insertAfterItem() {
//     const ul = document.querySelector('ul');






//     if (terceiroItem.nextSibling) {
//         ul.insertBefore(li, terceiroItem.nextSibling);
//     } else {
//         ul.appendChild(li);
//     }
// }

// function insertAfter(newEl, existingEl) {
//     existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
// };


// const li = document.createElement('li');
// li.textContent = 'inserindo depois';


// const terceiroItem = document.querySelector('li:nth-child(2)');

// insertBeforeItem();
// insertAfter(li, terceiroItem);
// insertAfterItem();


function DOMContentLoaded(callback) {
    document.addEventListener('DOMContentLoaded', callback);
}

DOMContentLoaded(() => {

    const form = document.querySelector('#item-form');
    const itemInput = document.querySelector('#item-input');
    const itemList = document.querySelector('#item-list');
    const clearAll = document.querySelector('#clear');
    const filter = document.querySelector('#filter');

    form.addEventListener('submit', handleFormSubmit);

    clearAll.addEventListener('click', () => { clearAllF(); clearFilter() });

    itemList.addEventListener('click', itemRemoveF);

    filter.addEventListener('input', filterF);

    VerificaOestadoDaLista(itemList);

    function handleFormSubmit(e) {

        e.preventDefault();

        const newItem = itemInput.value.trim();

        if (newItem) {
            addItemToList(newItem);
            itemInput.value = '';
        }

    }

    function addItemToList(itemText) {
        const li = createElement(itemText);
        appendLiToContainer(li, '.items');
        VerificaOestadoDaLista(itemList);
    }

    function createElement(item) {

        const button = createButton('remove-item btn-link text-red');

        const icon = createIcon('fa-solid fa-xmark');

        const text = createText(item);

        const li = createLi('item');

        addAppendChilds(li, [text, button]);
        addAppendChilds(button, [icon]);

        return li;
    }

    function createButton(classes) {
        const button = document.createElement('button');
        button.className = classes;

        return button;
    }

    function createIcon(classes) {
        const icon = document.createElement('i');
        icon.className = classes;

        return icon;
    }

    function createText(item) {
        const text = document.createTextNode(item);

        return text;
    }

    function createLi(classes) {
        const li = document.createElement('li');
        li.className = classes;

        return li;
    }

    function addAppendChilds(element, filhos) {
        filhos.forEach(filho => {
            element.appendChild(filho);
        });
    }

    function appendLiToContainer(li, containerSelector) {
        const container = document.querySelector(containerSelector);

        if (container) {
            container.appendChild(li);
        } else {
            alert('Esse container não existe!');
        }

    }

    function VerificaOestadoDaLista(lista) {
        // lista.childElementCount
        if (lista.innerHTML.trim() === '' || lista.children.length < 2) {
            clearAll.style.display = 'none';
        } else {
            clearAll.style.display = 'inline-block';
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
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        })
    }

    function clearFilter() {
        filter.value = '';
        filterF();
    }
});

