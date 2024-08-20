const xhr = new XMLHttpRequest();

const p = document.querySelector('.number-repos');
// xhr.open('GET', './movies.json');
xhr.open('GET', 'https://api.github.com/users/william-italia/repos');

xhr.onreadystatechange = function () {
  // console.log(this.readyState);
  console.log(this.status);
  if (this.readyState === 4 && this.status === 200) {
    console.log(JSON.parse(this.responseText));

    const data = JSON.parse(this.responseText);

    let num = 0;

    data.forEach(repo => {
      const li = document.createElement('li');
      num++;
      // li.innerHTML = `<img src="${data.avatar_url}" alt=""> bio: ${data.bio}`;

      li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;

      document.querySelector('#results').appendChild(li);
      p.innerHTML = `Numero de repositórios = ${num}`;
    });
  }
}

xhr.send();