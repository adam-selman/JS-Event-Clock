let currentTimeText = document.querySelector(".currentTimeText");
let currentDateText = document.querySelector(".currentDateText");
let eventCountdownText = document.querySelector(".eventCountdownText");
let dateInput = document.querySelector(".dateInput");

dateInput.addEventListener("change", setEventCountdownText);

setCurrentDateTime(); // writes time on loading the page

setInterval(setCurrentDateTime, 1000); // refreshes the time every second


function setCurrentDateTime()  
{
    currentDate = new Date();
    let currentDay = currentDate.getDate();
    currentDay = parseForDisplay(currentDay);

    let currentMonth = currentDate.getMonth() + 1;
    currentMonth = parseForDisplay(currentMonth);

    let currentYear = currentDate.getFullYear();
    currentMonth = parseForDisplay(currentMonth);
    
    let fullDate = currentDay + "/" + currentMonth + "/" + currentYear;

    currentHour = currentDate.getHours();
    currentHour = parseForDisplay(currentHour);

    currentMinute = currentDate.getMinutes();
    currentMinute = parseForDisplay(currentMinute);

    currentSecond = currentDate.getSeconds();
    currentSecond = parseForDisplay(currentSecond);


    let currentTime = currentHour + ":" + currentMinute + ":" + currentSecond;
    
    currentTimeText.innerText = currentTime;
    currentDateText.innerText = fullDate;
}

function setEventCountdownText(e)
{
    // Get the future date from HTML
    let userDate = e.target.value;
    console.log(userDate);

    // calculate the number of days, months and years etc
    countdownToDate = calcTimeUntilDate(userDate);
    // set HTML attribute to equal the time remaining
}

function parseForDisplay(string) // will add necessary formatting to strings to look better
{
    string = string.toString();
    if (string.length == 1) // if the char is only one digit at a 0 for formatting
    {
        string = "0" + string;
    }

    return string;
}

function calcTimeUntilDate(eventDate)
{
    console.log(eventDate);
    let monthValues = {
        1:31,
        2:28,
        3:31,
        4:30,
        5:31,
        6:30,
        7:31,
        8:31,
        9:30,
        10:31,
        11:30,
        12:31
    }

    currentDate = new Date();
    let currentDay = parseInt(currentDate.getDate());
    let currentMonth = parseInt(currentDate.getMonth() + 1);
    let currentMonthDays = monthValues[currentMonth];
    let currentYear = parseInt(currentDate.getFullYear());


    eventYear = parseInt(eventDate.slice(0,4)); // parse the input into numbers
    eventMonth = parseInt(eventDate.slice(5,7));
    eventDay = parseInt(eventDate.slice(8));
    eventMonthDays = monthValues[eventMonth];

    let currentDaySum = currentDay + (currentMonth * currentMonthDays) + (currentYear * 365); // used to count the total amount of time in days
    
    let eventDaySum = eventDay + (eventMonth * eventMonthDays) + (eventYear * 365);
    result = eventDaySum - currentDaySum; // find out how many days are left to go


    countdownYear = Math.floor(result / 365); // number of years is the floor div of the num of days
    console.log(`countdownYear: ${countdownYear}`); // debug

    result = result % 365; // getting the remainder for the months
    console.log(result);


    // loop through each month after current in the dictionary and subtract it's value until value drops below 0
    // set month to be the current month
    // get remainder of days
    // set number of days to be equal to remainder

    // return fully constructed date


}