function onClick(e) {
    console.log(e.target);
    e.target.style.backgroundColor = 'black';
    e.target.style.color = 'white';
}

// document.addEventListener('click', onClick);

function onDrag(e) {
    document.querySelector('h1').textContent = `X = ${e.clientX} Y ${e.clientY}`;
}


logo.addEventListener('drag', onDrag);