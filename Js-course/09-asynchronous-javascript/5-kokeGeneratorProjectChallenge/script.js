const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

xhr.onreadystatechange = function () {
    console.log(this.responseText);
}