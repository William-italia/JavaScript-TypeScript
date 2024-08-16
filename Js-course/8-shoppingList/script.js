const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const formBtn = itemForm.querySelector('button');
let isEditMode = false;

// funções complementares
function addAppendChilds(elemento, filhos) {
    filhos.forEach(filho => {
        elemento.appendChild(filho);
    });
}

function createLi(classes, filhos) {
    const li = document.createElement('li');
    li.className = classes;
    addAppendChilds(li, filhos);

    return li;
}

function createText(itemText) {
    const text = document.createTextNode(itemText);

    return text;
}

function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    addAppendChilds(button, [icon]);

    return button;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;

    return icon;
}

// -----------------application 

function displayItems() {
    const itemsFromStorage = getItemsFromStorage();
    itemsFromStorage.forEach((item) => {
        addItemToDOM(item);
    });
    checkUI();
}

function onAddItemSubmit(e) {

    e.preventDefault();

    const newItem = itemInput.value.toLowerCase();
    // validate input
    if (newItem === '') {
        alert('Por favor adicione um item!');
        return;
    }

    if (isEditMode) {
        const itemEdit = itemList.querySelector('.edit-mode');

        removeItemFromStorage(itemEdit.textContent);
        itemEdit.classList.remove('edit-mode');
        itemEdit.remove();
        isEditMode = false;
    } else {
        if (checkIfItemExists(newItem)) {
            alert('Esse item já existe!');
            return;
        }
    }

    addItemToDOM(newItem);
    addItemToStorage(newItem);

    checkUI();
}



function filterItems() {
    const filterText = itemFilter.value.toLowerCase();
    const items = itemList.querySelectorAll('li');

    items.forEach(item => {
        const itemText = item.textContent.toLowerCase();
        if (itemText.includes(filterText)) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
}



function checkIfItemExists(item) {
    const itemsFromStorage = getItemsFromStorage();
    return itemsFromStorage.includes(item);
}

function onClickItem(e) {
    if (e.target.closest('.remove-item')) {
        removeItem(e.target.closest('.remove-item'));
    } else if (e.target.classList.contains('item')) {
        setItemToEdit(e.target);
    }
}

function setItemToEdit(item) {
    isEditMode = true;

    itemList.querySelectorAll('li').forEach((item) => {
        item.classList.remove('edit-mode');
    });

    item.classList.add('edit-mode');
    formBtn.innerHTML = '<i class="fa-solid fa-pen"></i>   Update Item';
    formBtn.style.backgroundColor = '#228B22';
    itemInput.value = item.textContent;
}

function removeItem(item) {
    if (confirm('Tem certeza?')) {

        // Remove o item da DOM
        const itemLi = item.closest('li');
        itemLi.remove();
        const itemText = itemLi.textContent.trim();
        removeItemFromStorage(itemText);

        checkUI();
    }

}

function ClearItems() {

    if (confirm('Tem certeza que deseja remover todos os items da lista?')) {

        while (itemList.firstChild) {
            itemList.removeChild(itemList.firstChild);
        }
        localStorage.removeItem('items');

    }

    checkUI()
}

function addItemToDOM(item) {

    // create list items
    const text = createText(item);
    const button = createButton('remove-item btn-link text-red');
    const li = createLi('item', [text, button]);

    addAppendChilds(itemList, [li]);

    checkUI();
}

// storage
function getItemsFromStorage() {
    let itemsFromStorage;

    if (localStorage.getItem('items') === null) {
        itemsFromStorage = [];
    } else {
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }

    return itemsFromStorage;
}

function addItemToStorage(item) {
    const itemsFromStorage = getItemsFromStorage();

    itemsFromStorage.push(item);

    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function removeItemFromStorage(item) {
    let itemsFromStorage = getItemsFromStorage();

    itemsFromStorage = itemsFromStorage.filter((i) => i !== item);

    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}



function checkUI() {
    itemInput.value = '';

    const items = itemList.querySelectorAll('li');

    if (items.length <= 1) {
        clearBtn.style.display = 'none';
        itemFilter.style.display = 'none';
    } else {
        clearBtn.style.display = 'block';
        itemFilter.style.display = 'block';
    }

    formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
    formBtn.style.backgroundColor = '#333';

    isEditMode = false;

}

function init() {

    // event listeners
    itemForm.addEventListener('submit', onAddItemSubmit);
    itemList.addEventListener('click', onClickItem);
    clearBtn.addEventListener('click', ClearItems);
    itemFilter.addEventListener('input', filterItems);
    document.addEventListener('DOMContentLoaded', displayItems);

    checkUI();

}

init();


localStorage.setItem('PEDRO DA SILVA', 'PEDRÃO O TREM')