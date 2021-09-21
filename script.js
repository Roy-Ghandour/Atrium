function init() {
    //Initializing the Date object (This is used to fetch the current date and time)
    const date = new Date();

    //Fetching the date and time
    let day = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();

    //Formatting the time into an integer that can be compared
    let time = (hour * 60) + minute;

    //True = atrium open, False = atrium closed
    let active = false; //Atrium is closed by default

    //Checking for a weekday
    if (0 < day && day < 6) {
        //weekdays
        if (450 < time && time < 600)    active = true; // 07:30 - 10:00
        if (690 < time && time < 840)    active = true; // 11:30 - 14:00
        if (1020 < time && time < 1140)  active = true; // 17:00 - 19:00
    } else {
        //weekends
        if (690 < time && time < 780)    active = true; // 11:30 - 13:00
        if (1020 < time && time < 1110)  active = true; // 17:00 - 18:30
    }

    //Checking if the atrium is open
    if (active) {
        //Changing the background colour to green
        document.getElementById('background').style.backgroundColor = "#2ecc71";
    } else {
        //Changing the background colour to red
        document.getElementById('background').style.backgroundColor = "#e74c3c";
    }

    //Formatting the time to remain a constant 4 digits for consistency
        //Thus 4:9 -> 04:09
    let displayTime = "";
    if (hour < 10) displayTime = displayTime + "0";
    displayTime = displayTime + hour + ":";
    if (minute < 10) displayTime = displayTime + "0";
    displayTime = displayTime + minute;

    //Displaying the formatted time
    document.getElementById('time').innerHTML = displayTime;

    //Displaying the day of the week
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById('day').innerHTML = week[day];
}
