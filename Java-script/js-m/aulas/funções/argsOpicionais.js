function cadastro(nome, idade, sexo) {

  if (typeof nome === 'string' && typeof idade === 'number') {

    if (sexo != undefined) {
      console.log(`Seu nome é: ${nome}, sua idade é ${idade}, e seu sexo é: ${sexo}`);
    }

    else {
      console.log(`Seu nome é: ${nome} e sua idade é ${idade}!`);
      console.log("sexo não definido!");
    }

  }
  else {
    console.log("Os campos de nome e idade precisam ser cadastrados");
  }
}

cadastro('william', 18, "Bicicleta");


