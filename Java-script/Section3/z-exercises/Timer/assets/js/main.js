function Clock() {
    
    function getTimeFromSeconds(seconds) {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    const clock = document.querySelector('.clock');
    let seconds = 0;
    let timer;

    function startClock() {
        timer = setInterval(function () {
            seconds++;
            clock.innerHTML = getTimeFromSeconds(seconds);
        }, 1000);
    }
    
    document.addEventListener('click', function(e) {
        const element = e.target;

        if (element.classList.contains('zero')) {
            clearInterval(timer);
            clock.innerHTML = '00:00:00'
            clock.classList.remove('paused');
            seconds = 0;
        }

        if (element.classList.contains('stop')) {
            clearInterval(timer);
            clock.classList.add('paused');
        }

        if (element.classList.contains('start')) {
            clock.classList.remove('paused');
            clearInterval(timer);
            startClock();
        }
    }); 
}

Clock();











































// function getTimeFromSeconds(seconds) {
//     const data = new Date(seconds * 1000);
//     return data.toLocaleTimeString('pt-BR', {
//         hour12: false,
//         timeZone: 'GMT'
//     });
// }

// const clock = document.querySelector('.clock');
// const start = document.querySelector('.start');
// const stop = document.querySelector('.stop');
// const zero = document.querySelector('.zero');
// let seconds = 0;
// let timer;

// function startClock() {
//     timer = setInterval(function() {
//         seconds++;
//         clock.innerHTML = getTimeFromSeconds(seconds);
//     }, 1000);
// }

// document.addEventListener('click', function(e) {
//     console.log(e.target)
// });



// start.addEventListener('click', function(e) {
//     clearInterval(timer);
//     startClock();
//     clock.classList.remove('paused');
// });

// stop.addEventListener('click', function(e) {
//     clearInterval(timer);
//     clock.classList.add('paused');
// });

// zero.addEventListener('click', function(e) {
//     clearInterval(timer)
//     seconds = 0;
//     clock.classList.remove('paused');
//     clock.innerHTML = '00:00:00';
// });