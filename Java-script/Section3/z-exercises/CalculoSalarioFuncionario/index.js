function calcularDescontos(SalarioBruto) {
  const descontoINSS = 0.085;
  const descontoIR = 0.05;

  const descontoInssValor = SalarioBruto * descontoINSS;
  const descontoIrValor = SalarioBruto * descontoIR;

  return {
    descontoINSS: descontoInssValor,
    descontoIR: descontoIrValor,
  }
}


function calculaSalario() {



  const valorPorHora = 12;
  const valorPorDependentes = 40;

  const horasTrabalhadas = document.querySelectorAll("#horas");
  const numDependentes = document.querySelectorAll("#funcionarios");

  const salarioBruto = horasTrabalhadas * valorPorHora + numDependentes * valorPorDependentes;


}

calculaSalario();
