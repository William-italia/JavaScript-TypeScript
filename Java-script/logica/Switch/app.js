const data = new Date('1994-04-22');

const dayWeek = data.getDay(); //0 - domingo, 1 - segunda, 2 - terça, 3 - quarta, 4 - quinta, 5 - sexta, 6 - Sábado

function getDayWeekText(dayWeek) {
    let getDayWeekText;

    switch(dayWeek) {
case 0: 
    getDayWeekText = 'Domingo';
    return getDayWeekText;
case 1: 
    getDayWeekText = 'Segunda-Feira';
    return getDayWeekText;
case 2: 
    getDayWeekText = 'Terça-Feira';
    return getDayWeekText;
case 3: 
    getDayWeekText = 'Quarta-Feira';
    break;
case 4: 
    getDayWeekText = 'Quinta-Feira';
    break;
case 5: 
    getDayWeekText = 'Sexta-Feira';
    break;
case 6: 
    getDayWeekText = 'Sabado';
    break;
}

return getDayWeekText;
}





console.log(dayWeek, getDayWeekText(dayWeek));