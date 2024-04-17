// let words = ["banana", "abacaxi", "morango", "maçã", "pera", "uva", "laranja", "limão", "abacate", "melancia", "melão", "amora", "framboesa", "kiwi", "manga", "pêssego", "cereja", "goiaba", "caju", "tangerina", "jabuticaba", "pitanga", "açaí", "acerola", "carambola", "maracujá", "graviola", "cupuaçu", "guarana", "bacaba"];

// const result = words.filter((word) => word.length >= 8);

// console.log(result)

// let numbers = [];
// for (let i = 1; i <= 200; i++) {
//     numbers.push(i);
// }

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 != 0);

// const evenNumbers = [];
// const oddNumbers = [];
// numbers.forEach(number => {
//     if (number % 2 === 0) {
//         evenNumbers.push(number);
//     } else {
//         oddNumbers.push(number);
//     }
// });
// console.log(evenNumbers);
// console.log(oddNumbers);


const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const retailCompanies = companies.filter((company) => company.category == 'Retail');
const earlyCompanies = companies.filter((company) => company.start >= 1980 && company.end <= 2005);
const longCompanies = companies.filter((company) => company.end - company.start >= 10);



console.log(retailCompanies);
console.log(earlyCompanies);
console.log(longCompanies);