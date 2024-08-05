// let output;

// output = document.all;

// // document.all is deprecated
// output = document.all;
// output = document.all[11];
// output = document.all.length;

// // Everything in the html tags
// output = document.documentElement;

// // Head and body tags
// output = document.head;
// output = document.body;

// // HTMLCollection of everything in head/body
// output = document.head.children;
// output = document.body.children;

// // Random properties
// output = document.doctype;
// output = document.domain;
// output = document.URL;
// output = document.characterSet;
// output = document.contentType;

// // Get all forms
// output = document.forms;
// output = document.forms[0];
// output = document.forms[0].id;
// output = document.forms[0].method;
// output = document.forms[0].action;

// // Change a form id
// document.forms[0].id = 'new-id';

// // Get all links
// // output = document.links;
// // output = document.links[0];
// // output = document.links[0].href;g
// // output = document.links[0].href = 'https://facebook.com';
// // output = document.links[0].id = 'google-link';
// // output = document.links[0].className = 'google-class';
// // output = document.links[0].classList;

// // Get all images
// output = document.images;
// output = document.images[0];
// output = document.images[0].src;

// // Turn an HTMLCollection into an array
// const forms = Array.from(document.forms);
// forms.forEach((form) => console.log(form));

// console.log(output);

// const title = document.getElementById('app-title');

// // title.innerHTML = '<strong>Shopping List</strong>';
// // title.textContent = '<strong>Shopping List</strong>';
// title.innerHTML = '<strong>Shopping List</strong>';

// title.style.color = '#fff';
// title.style.backgroundColor = '#16161d';
// title.style.padding = '10px';
// title.style.borderRadius = '10px';

// const h1 = document.querySelectorAll('h1');

// // h1.style.color = 'red';


// const apple = document.querySelector('li:nth-child(1)');
// const orange = document.querySelector('li:nth-child(2)');
// const oreo = document.querySelector('li:nth-child(3)');
// const milk = document.querySelector('li:nth-child(4)');

// apple.style.color = 'red';
// orange.style.color = 'orange';
// oreo.style.color = 'brown';
// milk.style.color = 'white';
// milk.style.backgroundColor = '#16161D';

// const btn = document.querySelector('.btn-clear');

// btn.style.backgroundColor = '#16161d';
// btn.style.color = '#fff';

// const listItems = document.querySelectorAll('.item');

// console.log(listItems[1].innerText);

// listItems.forEach((item, index) => {

//     if (index < 3) {
//         item.style.color = 'red';
//     }

//     if (index === 2) {
//         item.innerHTML = `Oranges <button class="remove-item btn-link text-red">
//           <i class="fa-solid fa-xmark"></i>
//         </button>`;
//     }

//     if (index === 1) {
//         item.remove();
//     }
// });

// const listItems2 = document.getElementsByClassName('item');


// const listItems2Array = Array.from(listItems2);

// listItems2Array.forEach((item, index) => {

//     if (index < 3) {
//         item.style.color = 'red';
//     }

//     if (index === 2) {
//         item.innerHTML = `Oranges <button class="remove-item btn-link text-red">
//               <i class="fa-solid fa-xmark"></i>
//             </button>`;
//     }

//     if (index === 1) {
//         item.remove();
//     }
// });

// const listItems3 = document.getElementsByTagName('li');


// const listItems3Array = Array.from(listItems3);

// listItems3Array.forEach((item, index) => {

//     if (index < 3) {
//         item.style.color = 'red';
//     }

//     if (index === 2) {
//         item.innerHTML = `Oranges <button class="remove-item btn-link text-red">
//               <i class="fa-solid fa-xmark"></i>
//             </button>`;
//     }

//     if (index === 1) {
//         item.remove();
//     }
// });

