function Calculadora() {

    this.display = document.querySelector('.display');


    this.inicia = () => {
        this.capturaCliques();
        this.CapturaTecla();
    };

    this.CapturaTecla = () => {
        document.addEventListener('keydown', e => {

            if (e.key === 'Enter') {
                this.eq();
            }
            if (e.key === 'Escape') {
                this.clear();
            }
            if (e.key === 'Backspace') {
                this.del();
            }
        });
    }

    this.capturaCliques = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;

            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.eq();
        })
    }

    this.addNumDisplay = (el) => {
        this.display.value += el.innerText;
        this.display.focus();
    }

    this.clear = () => this.display.value = '';

    this.del = () => this.display.value = this.display.value.slice(0, -1);


    this.eq = () => {
        try {
            const conta = eval(this.display.value);

            if (!conta) {
                alert('conta Invalida!');
                return;
            }

            this.display.value = conta;
        } catch (e) {
            alert('conta Invalida!');
            return;
        }
    }

}

const calculadora = new Calculadora();
calculadora.inicia();