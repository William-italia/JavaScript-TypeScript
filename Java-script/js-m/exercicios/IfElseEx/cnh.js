let idade = 12;
let cnh = false;

// if(idade >= 18) {
//     if(cnh != true) {
//         console.log("Não possui cnh")
//     } else {
//         console.log("Possui cnh");
//     }   
// } else {
//     console.log("menor de idade")
// }

if(idade >= 18 && cnh === true) {
    console.log("Tem permissão para dirigir")
} else if (idade >= 18 && cnh === false) {
    console.log("Não tem permissão de digirir, mas pode tirar a cnh") 
} else {
    console.log("Menor de idade")
}