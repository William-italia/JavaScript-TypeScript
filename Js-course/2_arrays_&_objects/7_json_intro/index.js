const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
};

// convert to json string
const str = JSON.stringify(post);

// parse JSON
const obj = JSON.parse(str)

const posts = [
    {
        id: 1,
        title: 'Post One',
        body: 'This is the body',
    },
    {
        id: 2,
        title: 'Post Two',
        body: 'This is the body',
    },
];

const str2 = JSON.stringify(posts);

console.log(str2);