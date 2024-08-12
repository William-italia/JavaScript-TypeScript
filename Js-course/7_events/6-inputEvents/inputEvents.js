const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkBox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
    heading.textContent = e.target.value;
}
function onCheck(e) {
    const checked = e.target.checked;
    heading.textContent = checked ? 'Checked' : 'Not Checked';
}



function onFocus() {
    itemInput.style.backgroundColor = 'red';
}

function onBlur() {
    // console.log('input is not focus');
    itemInput.style.backgroundColor = 'white';
}

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput);
checkBox.addEventListener('input', onCheck);
itemInput.addEventListener('blur', onBlur);
itemInput.addEventListener('focus', onFocus);
