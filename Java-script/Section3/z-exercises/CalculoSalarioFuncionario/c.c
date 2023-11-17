#include <stdio.h>

int main() {
    float valorPorHora = 12.0;
    float valorPorDependente = 40.0;
    float descontoINSS = 0.085;  // 8.5% de desconto para INSS
    float descontoIR = 0.05;     // 5% de desconto para IR

    float horasTrabalhadas, salarioBruto, salarioLiquido;
    int numDependentes;

    // Leitura dos dados do funcionário
    printf("Digite o número de horas trabalhadas: ");
    scanf("%f", &horasTrabalhadas);

    printf("Digite o número de dependentes: ");
    scanf("%d", &numDependentes);

    // Cálculo do salário bruto
    salarioBruto = horasTrabalhadas * valorPorHora + numDependentes * valorPorDependente;

    // Cálculo dos descontos
    float descontoInssValor = salarioBruto * descontoINSS;
    float descontoIrValor = salarioBruto * descontoIR;

    // Cálculo do salário líquido
    salarioLiquido = salarioBruto - descontoInssValor - descontoIrValor;

    // Exibição dos resultados
    printf("\nSalário Bruto: %.2f moedas\n", salarioBruto);
    printf("Desconto INSS: %.2f moedas\n", descontoInssValor);
    printf("Desconto IR: %.2f moedas\n", descontoIrValor);
    printf("Salário Líquido: %.2f moedas\n", salarioLiquido);

    return 0;
}
