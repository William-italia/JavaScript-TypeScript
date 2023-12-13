function meuEscopo() {
  const form = document.querySelector("#form");
  const resultado = document.querySelector("#resultado");

  const pessoas = [];

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = form.querySelector(".Nome");
    const sobrenome = form.querySelector(".Sobrenome");
    const altura = form.querySelector(".Altura");
    const peso = form.querySelector(".Peso");

    if (nome.value.trim() !== "" && sobrenome.value.trim() !== "" && altura.value.trim() !== "" && peso.value.trim() !== "") {
      pessoas.push({
        nome: nome.value.trim(),
        sobrenome: sobrenome.value.trim(),
        altura: altura.value.trim(),
        peso: peso.value.trim()
      });

      resultado.innerHTML += `<p>${nome.value.trim()}, ${sobrenome.value.trim()}, ${altura.value.trim()}, ${peso.value.trim()}</p>`;
      console.log(pessoas);
      
      nome.value = "";
      sobrenome.value = "";
      altura.value = "";
      peso.value = "";

      
      nome.focus();
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });
}

meuEscopo();