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

const companyNames = companies.map((company) => `Compania: ${company.name}`);

const companyInfo = companies.map((company) => {
    return {
        name: company.name,
        category: company.category,
    };
});

console.log(companyInfo);

// const companyYears = companies.map((company) => {
//     let years = company.end - company.start;
//     return {
//         name: company.name,
//         years: years,
//     };
// });

const companyYears = companies.map((company) => {
    let years = company.end - company.start;
    return {
        name: company.name,
        categories: company.category,
        years: years
    }
}).filter((company) => company.years > 22);

console.log(companyYears);

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squareAndDouble = numbers
    .map((number) => Math.sqrt(number))
    .map((numsqrt) => numsqrt * 2)
    .filter((numsqrtdobrado) => numsqrtdobrado % 2 === 0);



const EvenAndDouble = numbers.filter((number) => number % 2 === 0)
    .map((numEven) => numEven * 2);

console.log(EvenAndDouble);

// console.log(squareAndDouble);