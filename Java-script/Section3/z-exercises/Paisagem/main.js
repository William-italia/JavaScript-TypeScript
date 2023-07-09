function paisagem (Width, Height) {
    return Width > Height ? 'Horizontal' : 'Vertical';
    // return Width > Height;
}

console.log(paisagem(1920, 1080));

function  retanguloPRQ (Width, Height) {

    if (Width > Height) {
        return `Paisagem`;
    } else if (Width < Height) {
        return `Retrato`;
    } else {
        return `Quadrado`;
    }
}

console.log(retanguloPRQ(1920, 1080));
