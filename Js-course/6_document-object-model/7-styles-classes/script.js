const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run() {

  text.classList.toggle('dark-bonito');

  // if (text.classList.contains('dark')) {
  //   text.classList.remove('dark');
  // } else {
  //   text.classList.add('dark');
  // }

  // text.classList.replace('dark', 'dark-bonito');

  // itemList.classList.forEach((c) => console.log(c));


  itemList.style.lineHeight = 3;

  const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A1FF33',
    '#FF33FF', '#33FFF5', '#FFB533', '#33FFB3', '#5733FF',
    '#FF3357', '#57FF33', '#A133FF', '#FF3333', '#33A1FF',
    '#FF33A1', '#FF9E33', '#33FF9E', '#A1FF57', '#3357A1',
    '#FFC300', '#DAF7A6', '#581845', '#C70039', '#900C3F',
    '#FF5733', '#FF8D33', '#FFC733', '#FFE933', '#BFFF33',
    '#80FF33', '#33FFBD', '#33FFF2', '#33A9FF', '#3339FF',
    '#6933FF', '#A433FF', '#DA33FF', '#FF33C4', '#FF3381',
    '#FF334D', '#FF684D', '#FF8568', '#FFC1C0', '#FF0000',
    '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF'
  ];

  items.forEach(item => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    item.style.color = randomColor;
  });
}

document.querySelector('button').onclick = run;



// // className - Gets a string of all classes
// console.log(itemList.className);
// // Changing the classes with className
// text.className = 'card dark';

// // classList - Array of classes, which also has methods to add, remove, toggle and replace
// console.log(itemList.classList);

// // We can loop through the classes
// itemList.classList.forEach((c) => console.log(c));

// // Add, remove, toggle, replace
// text.classList.add('dark');
// text.classList.remove('card');
// text.classList.toggle('hidden');
// text.classList.replace('card', 'dark');

// // style property - Add styles to elements
// itemList.style.lineHeight = '3';

// items.forEach((item, index) => {
//   item.style.color = 'red';

//   if (index === 2) {
//     item.style.color = 'blue';
//   }
// });