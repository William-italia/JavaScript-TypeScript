const h1 = document.querySelector('#View-date h1');
const date = new Date();

function zero (num) {
    return num >= 10 ? num : `0${num}`;
};

function getDayWeek (DayWeek) {

    const DayWeeks = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
    return DayWeeks[DayWeek];
};

function getMonth (Month) {

    const Months = [ 'January','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
    return Months[Month];
};

function showtime () {

    const DayWeek = getDay();
    const MonthNum = getMonth();

    const NameDay = getDayWeek(DayWeek);
    const MonthName = getMonth(MonthNum);

    const datahora = 
    `${NameDay}, ${zero(MonthNum)} ${MonthName}` +
    ` De ${date.getFullYear()} ${zero(date.getHours())}:${zero(date.getMinutes())}:${zero(date.getSeconds())}`;


    
};

function initTime () {
    setInterval(showtime, 1000);
};

h1.innerHTML = showtime(date);