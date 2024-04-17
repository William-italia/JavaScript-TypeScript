const socials = ['X', 'Linkedin', 'Facebook', 'Instagram', 'Github'];


// socials.forEach((item, index, arr) => {
//     console.log(`${index} - ${item}`);
// });

// function logSocials(social) {
//     console.log(social);
// }

// socials.forEach(logSocials);

const socialObjs = [
    { name: 'X', url: 'https://x.com' },
    { name: 'Linkedin', url: 'https://linkedin.com' },
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'Github', url: 'https://github.com' },
];

socialObjs.forEach((item) => console.log(item.name + ' ' + item.url));