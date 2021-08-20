let currentTimeText = document.querySelector(".currentTimeText");
let currentDateText = document.querySelector(".currentDateText");
let eventCountdownText = document.querySelector(".eventCountdownText");

setCurrentDateTime(); // writes time on loading the page

setInterval(setCurrentDateTime, 1000); // refreshes the time every second


function setCurrentDateTime()  
{
    currentDate = new Date();
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth() + 1;
    let currentYear = currentDate.getFullYear();
    let fullDate = currentDay + "/" + currentMonth + "/" + currentYear;
    let currentTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    
    currentTimeText.innerText = currentTime;
    currentDateText.innerText = fullDate;
}

function setEventCountdownText()
{
    currentDate = new Date();
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth() + 1;
    let currentYear = currentDate.getFullYear();
    let fullDate = currentDay + "/" + currentMonth + "/" + currentYear;
    let currentTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

    // Get the future date from HTML
    // calculate future date minus current date and display the time remaining
    // set HTML attribute to equal the time remaining
}