// Objetivo
/*
- if num % 3 = return Yeah! - ok
- if num % 5 = return yup! - ok 
- if num % 3 & 5 = return Yeah!yup! - ok
-if num not% 3 || 5 return num - ok
- check if num is num = return NaN
- use while
*/

    // function Divisivel (num) {
    //     const DivisivelPor3 = num % 3 === 0; 
    //     const DivisivelPor5 = num % 5 === 0; 

    //     if (typeof num !== 'number') return NaN;
    //     if (DivisivelPor3 && DivisivelPor5) return (`Yeah!yup!`);
    //     if (DivisivelPor5) return (`yup!`);
    //     if (DivisivelPor3) return (`Yeah!`);
    //     return '';
    // }
    // function Divisivel1 (num) {
    //     const DivisivelPor3 = num % 3 === 0; 
    //     const DivisivelPor5 = num % 5 === 0; 

    // if (num === Number(num)) {
    //     if (DivisivelPor3 && DivisivelPor5) {
    //         return (`Yeah!yup!`);
    //     } else if (DivisivelPor5) {
    //         return (`yup!`);
    //     } else if (DivisivelPor3) {
    //         return (`Yeah!`);
    //     } else {
    //         return (num);
    //     }
    // } else {
    //     return (num);
    // }
    // }
    
    // let n;
    // let number;

    // for (n= 0; n<= 100; n++) {
    //     console.log(n, Divisivel(n));
    // }
    // while (number <= 100) {




    // console.log(Divisivel(number));
    // number++
    // }

    // if (typeof num !== 'number') return NaN;
    //     if (DivisivelPor3 && DivisivelPor5) return (`Yeah!yup!`);
    //     if (DivisivelPor5) return (`yup!`);
    //     if (DivisivelPor3) return (`Yeah!`);
    //     return '';

    function Divisivel(num) {
        if (num % 3 === 0 && num % 5 === 0) return `Yeah!yup!`
        if (typeof num !== 'number') return NaN;
        if (num % 5 === 0) return `yup!`
        if (num % 3 === 0) return `Yeah!`
        return '';
    } 

    
    for (let num = 0; num <= 100; num ++) {
        console.log(num, Divisivel(num));
    }

 