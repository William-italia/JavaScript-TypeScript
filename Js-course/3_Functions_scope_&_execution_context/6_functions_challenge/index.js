const getCelsius = (Fah) => {
    const celsius = ((Fah - 32) * 5) / 9;
    return Math.round(celsius);
};

console.log(`The temperature is ${getCelsius(96)} °C`);


function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {
        min,
        max
    };
}

console.log(minMax([55, 32, 43, 54, 65, 76, 87, 98, 109]));

((length, width) => {
    const area = length * width;

    const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

    console.log(output);
})(15, 20);