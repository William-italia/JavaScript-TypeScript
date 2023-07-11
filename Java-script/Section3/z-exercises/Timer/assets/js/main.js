function getTimeFromSeconds(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

const clock = document.querySelector('.clock');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const zero = document.querySelector('.zero');
let seconds = 0;
let timer;

function startClock() {
    timer = setInterval(function() {
        segundos++;
        clock.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);
}


start.addEventListener('click', function(e) {
    // startClock();
});

stop.addEventListener('click', function(e) {
    alert('Cliquei na stop')
});

zero.addEventListener('click', function(e) {
    alert('Cliquei na zero')
});