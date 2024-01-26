const pontos = 9990;
const nivelUsuario = pontos >= 1000 ? 'Usuario VIP' : 'Usuario Normal';

// corUsuario = null
corUsuario = 'Azul'
corPadrao = corUsuario || 'preto';

console.log(nivelUsuario, corPadrao);