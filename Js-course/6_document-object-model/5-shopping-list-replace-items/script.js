function replaceItem() {
    const firstItem = document.querySelector('li:first-child');

    const li = document.createElement('li');
    li.textContent = 'replace first';

    firstItem.replaceWith(li);
}

function replaceSecondItem() {
    const secondItem = document.querySelector('li:nth-child(2)');

    secondItem.outerHTML = '<li>Replace Second</li>';
}

replaceSecondItem();
replaceItem();
replaceAllItems();

function replaceAllItems() {
    const lis = document.querySelectorAll('li');

    lis.forEach((item, index) => {
        // index === 3 ? item.outerHTML = '<li>Replace four item</li>' : item.outerHTML = '<li>Replace All</li>';
        item.outerHTML = index === 2 ? '<li>Replace four item</li>' : '<li>item</li>';
        // item.innerHTML = 'Replace All';
    });
}

function replaceChildHeading() {
    const header = document.querySelector('header');
    const h1 = document.querySelector('h1');

    const h2 = document.createElement('h2');
    h2.id = 'app-title';
    h2.textContent = 'Shopping List';

    header.replaceChild(h2, h1);
}

replaceChildHeading();