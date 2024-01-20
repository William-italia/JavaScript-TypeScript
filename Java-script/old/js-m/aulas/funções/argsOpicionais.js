function cadastro(nome, idade, sexo) {

  if (typeof nome === 'string' && nome.trim() != '' && typeof idade === 'number') {

    if (sexo != undefined && sexo.trim() != '') {

      const sexoV = sexo.toLowerCase();

      if(sexoV === "masculino" || sexoV === "feminino") {
        console.log(`Seu nome é: ${nome}, sua idade é ${idade}, e seu sexo é: ${sexo}`);
      }
      else {
       console.log(`Seu nome é: ${nome}, sua idade é ${idade}`);
       console.log(`Sexo invalido`);
      }
      
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

cadastro('w', 12, 'masculino');


