function myform () {
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');
    const person = [];

    function getEventForm (e) {
        e.preventDefault();

        const Fname = form.querySelector('#FisrtName');
        const Lname = form.querySelector('#LastName');
        const weight = form.querySelector('#Weight');
        const height = form.querySelector('#Height');

        person.push({
        FisrtName: FisrtName.value,
        LastName: LastName.value,
        Weight: Weight.value,
        Height: Height.value,
        });

        result.innerHTML += `<p class="R">${Fname.value} ${Lname.value} ${Weight.value} ${Height.value}</p>`;
        console.log(person);
    };

    form.addEventListener('submit', getEventForm);
}

myform();