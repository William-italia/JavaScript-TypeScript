let varA  = 'A'; // B
let varB  = 'B'; // C
let varC  = 'C'; // A

const vara = varA;

varA = varB;  
varB = varC;
varC = vara;

// [varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
