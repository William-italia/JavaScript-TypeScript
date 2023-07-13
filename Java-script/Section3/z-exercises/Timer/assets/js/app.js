function Relogio() {

  function pegaSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'GMT'
    });
  }

    const Relogio = document.querySelector('.clock');
    let segundos = 0;
    let timer;

    function iniciaRelogio() {
      timer = setInterval(function() {
        segundos++;
        Relogio.innerHTML = pegaSegundos(segundos);
      }, 1000);
    }

    document.addEventListener('click', function(e) {

      const element = e.target;

        if(element.classList.contains('zero')) {
          clearInterval(timer);
          Relogio.classList.remove('paused');
          Relogio.classList.remove('start');
          Relogio.classList.add('zero');
          Relogio.innerHTML = "00:00:00"
          segundos = 0;
          Relogio.classList.remove('zero');
        }

        if(element.classList.contains('stop')) {
          if(Relogio.classList.contains('start') || Relogio.classList.contains('zero')) {
            Relogio.classList.remove('start', 'zero');
            clearInterval(timer);
            Relogio.classList.add('paused');
          } else if(!Relogio.classList.contains('paused')) {
            alert('Relogio não foi iniciado!');
          }
        }

        if(element.classList.contains('start')) {
          Relogio.classList.remove('zero');
          Relogio.classList.add('start');
          Relogio.classList.remove('paused');
          Relogio.classList.remove('zero');
          clearInterval(timer);
          iniciaRelogio();
        }
    });
}

Relogio();