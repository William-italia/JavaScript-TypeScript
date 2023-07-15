function RetornaHora() {
    
    const Data = new Date();
    
    return Data.toLocaleTimeString('pt-BR', {
        hour12: false,
   });
}

// function setIntervalTimer() {
//     console.log(RetornaHora());
// }

const timer = setInterval(function () {
    console.log(RetornaHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 3000);

setTimeout(function() {
    console.log('Relogio desligado');
}, 5000);