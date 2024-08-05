let output;

const parent = document.querySelector('.parent');

output = parent.childNodes;
output = parent.childNodes[4].nodeName;
output = parent.childNodes[3].outerHTML;
output = parent.childNodes[3].style.color = 'red';

parent.firstChild.textContent = 'Hello ONE'
parent.lastChild.textContent = 'Hello TWO'

output = parent.firstChild;
output = parent.lastChild;


const child = document.querySelector('.child');

output = child.parentNode;
output = child.parentElement;

child.parentNode.style.backgroundColor = '#f4f4f4';
child.parentNode.style.padding = '10px';

const secondItem = document.querySelector('.child:nth-child(2)');


output = secondItem.nextSibling;
output = secondItem.previousSibling;

console.log(output);
