function removeClearButton() {
    const clearBtn = document.querySelector('#clear').remove();
}

function removeFirstItem() {
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');

    ul.removeChild(li);
}

function removeItem(index) {
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${index})`);

    ul.removeChild(li);
}
function removeItem2(index) {
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li')[index - 1];

    ul.removeChild(li);
}
function removeItem3(index) {
    const li = document.querySelectorAll('li');

    li[index - 1].remove();
}

const removeItem4 = (index) => {
    document.querySelectorAll('li')[index - 1].remove();
}

// removeItem(4);
// removeItem2(1);
removeItem4(3);
// removeFirstItem();
// removeClearButton();