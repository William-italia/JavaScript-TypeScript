let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numPares = [];

for (let i in num) {
  if (num[i] % 2 === 0) {
    numPares.push(num[i]);
    delete num[i];
  }
};

num = num.filter((el) => {
  return el !== undefined;
});

console.log(num);
console.log(numPares);