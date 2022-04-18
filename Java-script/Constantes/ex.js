let  imc;
const nome = 'William';
const sobrenome = ' Itália';
const idade = 18;
const peso = 80;
const alturaEmM = '1.80';
imc = peso / Math.pow(alturaEmM, 2);
const imcFormatado = imc.toFixed(2);
const anoNascimento = 2022 - idade;

console.log(`${nome + sobrenome} tem ${idade} anos, nasceu em ${anoNascimento}, pesa ${peso}kg tem ${alturaEmM} de altura e seu IMC é de ${imcFormatado}.`)