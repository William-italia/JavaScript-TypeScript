const socials = ['X', 'Linkedin', 'Facebook', 'Instagram', 'Github'];


// socials.forEach((item, index, arr) => {
//     console.log(`${index} - ${item}`);
// });

// function logSocials(social, index) {
//     index++;
//     console.log(index, social);
// }

// socials.forEach(logSocials);

const socialObjs = [
    { name: 'X', url: 'https://x.com' },
    { name: 'Linkedin', url: 'https://linkedin.com' },
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'Github', url: 'https://github.com' },
];

socialObjs.forEach((element) => console.log(element.name, element.url)
);