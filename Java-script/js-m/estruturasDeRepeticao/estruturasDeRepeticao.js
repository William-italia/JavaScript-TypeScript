let x = 15; 

// while(x > 0) {
//     console.log(x);
//     x--;
// };

// let y = 100
// do {
//     console.log(y/2);
//     y--;
// }  while(y >= 0);

// for (let x = 1; x <= 10; x++) {
//     for (let y = 0; y <= 10; y++) {
        
//         if(y < 10) {
//             console.log(`${x} x ${y} = ${x*y}`);
//         }
//         else {
//             console.log(`${x} x ${y} = ${x*y}\n`);
//         }
//     }
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(i * 2);
// }

let y = 1

while(y <= 10) {
    for(let x = 1; x <= 10; x++) {
        if(x < 10) {
            console.log(`${y} x ${x} = ${x*y}`);
        } else {
            console.log(`${y} x ${x} = ${x*y}\n`);
        }
    }
    y++;
}