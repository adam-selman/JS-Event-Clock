let currentTimeText = document.querySelector(".currentTimeText");
let currentDateText = document.querySelector(".currentDateText");

console.log(currentTimeText.innerText); // debug

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