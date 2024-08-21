const promise = new Promise((resolve, reject) => {

  setTimeout(() => {
    console.log('Async task complete');
    resolve();
  }, 1000);
});

// promise.then(() => {
//   console.log('promise consumed..');

// });


// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ name: 'john', age: 23 });
//   }, 1000);
// }).then((user) => console.log(user.name, user.age));

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;

    if (!error) {
      resolve({ name: 'john', age: 23 });
    } else {
      reject('Error: Algo deu errado!');
    }
  }, 1000);
});


getUser
  .then((user) => console.log(user))
  .catch((error) => console.log(error))
  .finally(() => console.log('Isso será executado independente se der erro ou não'));




console.log('hi, global scope');
