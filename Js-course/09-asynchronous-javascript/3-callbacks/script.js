// function toggle(e) {
//   e.target.classList.toggle('danger');
// }

// document.querySelector('button').addEventListener('click', toggle);

const div = document.getElementById('posts');

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];


function createPost(post, cb) {
  setTimeout(() => {
    posts.push(post);
    cb();
  }, 2000);
}

function getPosts() {
  setTimeout(() => {
    posts.forEach((post) => {
      div.appendChild(createDiv(post));
    })
  }, 1000);
}

function createDiv(post) {
  const div = document.createElement('div');
  div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;

  return div;
}

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);

