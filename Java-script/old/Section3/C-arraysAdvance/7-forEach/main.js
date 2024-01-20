const a1 = [10, 20 ,30 ,40 ,50 ,60 ,70 ,80 , 90];

// for(let valor of a1) {
//     console.log(valor)
// }

let total = 0;

a1.forEach((valor, inidice, Array) => {
    total += valor;
});

console.log(total);