// Method 1
// window.addEventListener('keydown', (e) => {
//   const insert = document.getElementById('insert');

//   insert.innerHTML = `
//     <div class="key">
//       ${e.key === ' ' ? 'Space' : e.key}
//       <small>e.key</small>
//     </div>

//     <div class="key">
//       ${e.keyCode}
//       <small>e.keyCode</small>
//     </div>

//     <div class="key">
//       ${e.code}
//       <small>e.code</small>
//     </div>
//   `;
// });

// Method 2
function showKeyCodes(e) {
  const insert = document.getElementById('insert');
  insert.innerHTML = '';

  const keyCodes = {
    'e.key': e.key,
    'e.keycode': e.keyCode,
    'e.code': e.code,
  }


  for (let key in keyCodes) {

    // texto small que indentifica as caixas e.key, e.keycode e e.code
    const keyText = document.createTextNode(key);

    // isso é o valor da chavea
    const valueKey = document.createTextNode(keyCodes[key]);

    // small.appendChild(keyText);
    const small = createSmall([keyText]);
    const div = createDiv('key', [small, valueKey]);

    insert.appendChild(div);
  }
}

function createDiv(className, filhos) {
  const div = document.createElement('div');
  div.classList.add(`${className}`);

  filhos.forEach(element => {
    div.appendChild(element);
  });

  return div;
}

function createSmall(filhos) {
  const small = document.createElement('small');

  if (filhos) {
    filhos.forEach(el => {
      small.appendChild(el);
    });

    return small
  }

  return small;
}



window.addEventListener('keydown', showKeyCodes);

















