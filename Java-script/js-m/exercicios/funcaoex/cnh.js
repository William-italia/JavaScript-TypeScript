function podeDirigir(idade, cnh) {
  if (idade >= 18) {
    if (cnh === true) {
      console.log("Pode dirigir!");
    } else {
      console.log("Pode tirar cnh!");
    }
  } else {
    console.log("Menor de idade!");
  }
}

podeDirigir(18, 1);
