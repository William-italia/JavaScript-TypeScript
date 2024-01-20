function CreateCalculator() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),


        start() {
            this.buttonClicks();
            this.keyPressed();
        },

        keyPressed() {
            document.addEventListener('keydown', (e) => {               
                if(e.key === 'Enter') {
                    this.doAccount();
                }
                if(e.key === 'Escape') {
                    this.clearDisplay();
                }
                if(e.key === 'Backspace') {
                    this.deleteOne();
                }
            });
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

        doAccount() {
            let account = this.display.value;

            try {
                account = eval(account);
                if(!account) {
                    alert('Conta invalida!');
                    return;
                }
                
                this.display.value = account;
            } catch(e) {
                alert('Conta Invalida!');
                return;
            }
        },

        buttonClicks() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnForDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.deleteOne();
                }

                if(el.classList.contains('btn-eq')) {
                    this.doAccount(); 
                }
            });
        },

        btnForDisplay(valor) {
            this.display.value += valor;
        }
        
    };
}

const calculator = CreateCalculator();
calculator.start();