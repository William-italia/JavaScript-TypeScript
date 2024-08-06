function replaceItem() {
    const firstItem = document.querySelector('li:first-child');

    const li = document.createElement('li');
    li.textContent = 'replace first';

    firstItem.replaceWith(li);
}

replaceItem();