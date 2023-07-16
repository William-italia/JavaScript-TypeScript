// let i = 0;
// let nomes = [
//     "João",
//     "Maria",
//     "Pedro",
//     "Ana",
//     "Lucas",
//     "Mariana",
//     "Gabriel",
//     "Carolina",
//     "Rafael",
//     "Lara",
//     "Fernando",
//     "Isabela",
//     "Gustavo",
//     "Laura",
//     "Henrique",
//     "Manuela",
//     "Rodrigo",
//     "Juliana",
//     "Diego",
//     "Camila"
//   ];
  
// while (i < nomes.length) {
//     console.log(`${nomes[i]}` + (i !== nomes.length - 1 ? ',' : '.'));
//     i++;
   
// };

 // if (i < nomes.length -1) {
    // if (i !== nomes.length -1) {
    //     console.log(`${nomes[i]},` )
    // } else {
    //     console.log(`${nomes[i]}.` )
    // }


    function Random(Min, Max) {
        const r = Math.random() * (Max - Min) + Min;
        return Math.floor(r);
    }

    const Min = 0;
    const Max = 60;
    let rand = Random(Min, Max);

    while (rand !== 10) {
        rand = Random(Min, Max);
        console.log(rand);
    }

    console.log('---------------------------------------');

    do {
        rand = Random(Min, Max);
        console.log(rand);
    } while (rand !== 10);

