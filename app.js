function countdown() {
    let today = new Date();
    let eventDate = new Date('december 31,2020 23:59:59');

    let currentTime = today.getTime();
    let eventTime = eventDate.getTime();

    let leftTime = eventTime - currentTime;

    let sec = Math.floor(leftTime/1000);
    let min = Math.floor(sec/60);
    let hrs = Math.floor(min/60);
    let days = Math.floor(hrs/24);

    hrs %= 24;
    min %= 60;
    sec %= 60;

    hrs = (hrs < 10) ? "0" + hrs : hrs;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;

    setTimeout(countdown, 1000);
}

countdown();