function meuEscopo() {

  const form = document.querySelector('#form');
  const resultado = document.querySelector('#resultado');
  // form.onsubmit = (e) => {
  //   e.preventDefault();
  // };

  const pessoas = [];

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = form.querySelector('.Nome');
    const sobrenome = form.querySelector('.Sobrenome');
    const altura = form.querySelector('.Altura');
    const peso = form.querySelector('.Peso');

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      altura: altura.value,
      peso: peso.value
    });

    console.log(pessoas);
    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}, ${altura.value}, ${peso.value}</p>`;
  });

}

meuEscopo();
