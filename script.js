const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newYears = "23 Mar 2022";

function countDown(){
    const newYearsDate = new Date(newYears);
    const currenDate = new Date();
    const totalSeconds = (newYearsDate - currenDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds; 
    console.log(days,hours,minutes,seconds);
}
//initual call
setInterval(countDown,1000);

countDown();