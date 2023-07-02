const frutas = ["maçã", "banana", "laranja", "abacaxi", "uva", "morango", "manga", "kiwi", "pêssego", "melancia"];

const virgula = ',';

for (let i = 0; i < frutas.length; i++) {
    if (i < 9) {
        console.log(`Índice ${i +1}: ${frutas[i]},`);
    } else {
        console.log(`Índice ${i +1}: ${frutas[i]}.`);
    }


}


// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }