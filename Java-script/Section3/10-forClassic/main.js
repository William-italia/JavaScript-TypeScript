const frutas = [
    "Maçã",
    "Banana",
    "Laranja",
    "Abacaxi",
    "Uva",
    "Morango",
    "Manga",
    "Kiwi",
    "Pêssego",
    "Melancia",
    "Mamão",
    "Limão",
    "Cereja",
    "Ameixa",
    "Maracujá",
    "Pera",
    "Framboesa",
    "Melão",
    "Mirtilo",
    "Açaí",
    "Jabuticaba",
    "Pitanga",
    "Caju",
    "Tangerina",
    "Romã",
    "Amora",
    "Acerola",
    "Graviola",
    "Jambu",
    "Cajá"
  ];
  

const virgula = ',';

for (let i = 0; i < frutas.length; i++) {
    // if (i < frutas.length - 1) {
    //     console.log(`Índice ${i + 1}: ${frutas[i]},`);
    // } else {
    //     console.log(`Índice ${i + 1}: ${frutas[i]}.`);
    // }
    console.log(`Índice ${i + 1}: ${frutas[i]}` + (i !== frutas.length - 1 ? ',' : '.')); 
}


// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }