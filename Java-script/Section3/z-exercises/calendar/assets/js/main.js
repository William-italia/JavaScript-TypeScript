const data = new Date();

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
    return `${getWeekDayText(data.getDate())}, ${leftZero(data.getDate())} de ${getMonthText(data.getMonth())} de ${data.getFullYear()}`;
} 
function PrintCalendar (Date) {
    const h1 = document.querySelector('.H1');
    const h3 = document.querySelector('.H3');

    const printh1 = CalendarFormat(data);
    const printh3 = TimeFormat(data);

    h1.innerHTML = printh1;
    h3.innerHTML = printh3;
}

PrintCalendar(data);