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

    if (nome.value.trim() !== "" && sobrenome.value.trim() !== "" && altura.value.trim() !== "" && pese.value.trim() !== "") {
      pessoas.push({
        nome: nome.value.trim(),
        sobrenome: sobrenome.value.trim(),
        altura: altura.value.trim(),
        peso: peso.value.trim()
      });

      resultado.innerHTML += `<p>${nome.value.trim()}, ${sobrenome.value.trim()}, ${altura.value.trim()}, ${peso.value.trim()}</p>`;

      // Limpar os valores dos inputs
      nome.value = "";
      sobrenome.value = "";
      altura.value = "";
      peso.value = "";

      // Voltar o foco para o primeiro input
      nome.focus();
    } else {
      // Adicione aqui a lógica para lidar com campos vazios, se necessário
      alert("Por favor, preencha todos os campos.");
    }
  });
}

meuEscopo();