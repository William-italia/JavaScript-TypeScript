// factory function
function createPerson(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        // getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
            // or
            // return `${nome} ${sobrenome}`
        },

        // setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor); 
        },

        fala(assunto) {
            return `${this.nome} está ${assunto}.`
        },
        
        altura,
        peso,

        // imc() {
        //     const imc = this.peso / (this.altura ** 2);
        //     return imc.toFixed(2);
        // }
        get imc() { // "transforma" a função em atributo // getter
            const imc = this.peso / (this.altura ** 2);
            return imc.toFixed(2);
        }
    };
}

const p1 = createPerson('Luiz', 'Peneira', 1.80, 80);
p1.nomeCompleto = 'Marcos Peneirinha Manta'
console.log(p1.nomeCompleto);
// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.imc) 




// console.log(p1.fala('Falando sobre Js'));
// const p2 = createPerson('Henrique', 'Peneira', 1.60, 77);
// console.log(p2.imc())
// console.log(p2.fala('Falando sobre Flutter'));
