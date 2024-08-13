const listItems = document.querySelectorAll('i');
const list = document.querySelector('ul');

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'I') {
        const button = e.target.closest('li');
        button.remove();
    }
});

list.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.style.color = 'red';
    }
});

list.addEventListener('mouseout', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.style.color = ''; // Retorna ao estilo original
    }
});
// listItems.forEach(item => {
//     item.addEventListener('click', (e) => {
//         const button = e.target.closest('li');
//         button.remove();
//     });
// });