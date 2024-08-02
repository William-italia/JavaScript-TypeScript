let words = ["banana", "abacaxi", "morango", "maçã", "pera", "uva", "laranja", "limão", "abacate", "melancia", "melão", "amora", "framboesa", "kiwi", "manga", "pêssego", "cereja", "goiaba", "caju", "tangerina", "jabuticaba", "pitanga", "açaí", "acerola", "carambola", "maracujá", "graviola", "cupuaçu", "guarana", "bacaba"];



const palavrasGrandes = words.filter((word) => word.length >= 8);

// console.log(palavrasGrandes)


const numbers = [1, 2, 2, 2, 3, 3, 4, 4, 4, 5, 6, 6, 6, 6, 7, 8, 7, 9, 10, 35, 35, 35, 48, 48, 48, 432, 542, 432];

const evenNumbers = numbers.filter(number => number % 2 === 0).map(number => number * 2);

// console.log(evenNumbers);

const valoresUnicosParesAOquadrado = numbers.filter((value, index, self) => self.indexOf(value) === index).filter(number => number % 2 === 0).map(number => number * 2);

console.log(valoresUnicosParesAOquadrado);



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


const companiesFinance = companies.filter((company) => company.category == "Finance" && company.start >= 1985 && company.end <= 2011);
console.log(companiesFinance);


// const retailCompanies = companies.filter((company) => company.category == 'Retail');
// const earlyCompanies = companies.filter((company) => company.start >= 1980 && company.end <= 2005);
// const longCompanies = companies.filter((company) => company.end - company.start >= 10);



// const financeCompanies = companies.filter((company) => company.category == 'Finance');
// const financeCompaniesTIME = companies.filter((company) => company.category === 'Technology' || company.start > 1998);

// console.log(financeCompaniesTIME);
// console.log(financeCompanies);
// console.log(financeCompaniesAfter2000);
// console.log(retailCompanies);
// console.log(earlyCompanies);
// console.log(longCompanies);

const people = [
    { name: 'John', age: 28 },
    { name: 'Jane', age: 34 },
    { name: 'Peter', age: 21 },
    { name: 'Mark', age: 17 }
];

const maioresDeIdade = people.filter(person => person.age >= 21);

console.log(maioresDeIdade);

const products = [
    { name: 'Laptop', price: 1500, category: 'Electronics' },
    { name: 'Phone', price: 800, category: 'Electronics' },
    { name: 'Shirt', price: 20, category: 'Clothing' },
    { name: 'Pants', price: 50, category: 'Clothing' }
];


const productsCaros = products.filter(product => product.price >= 1000);

console.log(productsCaros);
