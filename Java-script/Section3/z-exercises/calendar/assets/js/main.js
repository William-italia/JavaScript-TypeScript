const date = new Date();

function getWeekDayText(dtWeek) {
    let WeekDayText;

    switch (dtWeek) {
        case 0:
            WeekDayText = 'Sunday';
            break;
        case 1:
            WeekDayText = 'Monday';
            break;
        case 2:
            WeekDayText = 'Tuesday';
            break;
        case 3:
            WeekDayText = 'Wednesday';
            break;
        case 4:
            WeekDayText = 'Thursday';
            break;
        case 5:
            WeekDayText = 'Friday';
            break;
        case 6:
            WeekDayText = 'Saturday';
            break;
        default:
            WeekDayText = 'nonexistent'
            break;
        }
        return WeekDayText;
}
function getMonthText(dtmonth) {

    let MonthText = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

      return MonthText = MonthText[dtmonth];
}
function leftZero(num) {
    return num >= 10 ? num : `0${num}`;
}
function TimeFormat(dtTime) {
    const hours = leftZero(dtTime.getHours());
    const minutes = leftZero(dtTime.getMinutes());
    const seconds = leftZero(dtTime.getSeconds());
    const ms = leftZero(dtTime.getMilliseconds());
    
    return `Clock: ${hours}:${minutes}:${seconds}`;
}
function CalendarFormat (dtcalendar) {
    return `${getWeekDayText(date.getDate())}, ${leftZero(date.getDate())} de ${getMonthText(date.getMonth())} de ${date.getFullYear()}`;
} 
function PrintCalendar (Date) {
    const h1 = document.querySelector('.H1');
    const h3 = document.querySelector('.H3');

    const printh1 = CalendarFormat(date);
    const printh3 = TimeFormat(date);

    h1.innerHTML = printh1;
    h3.innerHTML = printh3;
}

PrintCalendar(date);

// const h1 = document.querySelector('h1');
// const h3 = document.querySelector('h3');

// const data = new Date();
// const options = {
//     dateStyle: 'full',
//     timeStyle: 'short' nn está funcionando por algum motivo;
// };

// h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full' });