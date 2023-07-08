const P = document.querySelector('.paragrafos');
const Ps = P.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const bgColorBody = estiloBody.backgroundColor;
// const textColor = 
console.log(bgColorBody);

for (let penis of Ps) {
    penis.style.backgroundColor = bgColorBody;
    // p.style.color = textColorContainer;
    penis.style.color = '#FFFFFF';
}