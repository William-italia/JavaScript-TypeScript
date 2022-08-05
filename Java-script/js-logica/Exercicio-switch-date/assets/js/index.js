const h1 = document.querySelector('#Mostra-Data h1');
const date = new Date();

function getDayWeek (DayWeek) {

    const DayWeeks = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
    return DayWeeks[DayWeek];
}

function getMonth (Month) {

    const Months = [ 'January','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
    return Months[Month];
}

function zero (num) {
    return num >= 10 ? num : `0${num}`;
}

function CreateDate (date) {
    const DayWeek = date.getDay();
    const MonthNum = date.getMonth();

    const NameDay = getDayWeek(DayWeek);
    const MonthName = getMonth(MonthNum);

    return (
    `${NameDay}, ${zero(MonthNum)} ${MonthName}` +
    ` De ${date.getFullYear()} ${zero(date.getHours())}:${zero(date.getMinutes())}:${zero(date.getSeconds())}`
    );
}

function initTime () {
    setInterval(CreateDate, 1000);
}

h1.innerHTML = CreateDate(date);


// const h1 = document.querySelector('#Monstra-Data h1');
// const date = new Date();
// h1.innerHTML = date.toLocaleDateString('pt-BR', { dateStyle: 'full' });

// function getDayWeek (DayWeek) {

//     let DayWeekText;

//     switch (DayWeek) {

//         case 0: 
//             DayWeekText = 'Sunday';
//         break;

//         case 1: 
//             DayWeekText = 'Monday';
//         break;

//         case 2: 
//             DayWeekText = 'Tuesday';
//         break;

//         case 3: 
//             DayWeekText = 'Wednesday';
//         break;

//         case 4: 
//             DayWeekText = 'Thursday';
//         break;

//         case 5: 
//             DayWeekText = 'Friday';
//         break;

//         case 6: 
//             DayWeekText = 'Saturday';
//         break;

//         default: 
//             DayWeekText = ''
//         break;
//     }
//     return DayWeekText;
// }

// function getMonth (Month) {

//     let MonthText;

//     switch (Month) {
//         case 0:
//             MonthText = 'January';
//         break;
//         case 1:
//             MonthText = 'February';
//         break;
//         case 2:
//             MonthText = 'March';
//         break;
//         case 3:
//             MonthText = 'April';
//         break;
//         case 4:
//             MonthText = 'May';
//         break;
//         case 5:
//             MonthText = 'June';
//         break;
//         case 6:
//             MonthText = 'July';
//         break;
//         case 7:
//             MonthText = 'August';
//         break;
//         case 8:
//             MonthText = 'September';
//         break;
//         case 9:
//             MonthText = 'October';
//         break;
//         case 10:
//             MonthText = 'November';
//         break;
//         case 11:
//             MonthText = 'December';
//         break;
//     }

//     return MonthText;
// }