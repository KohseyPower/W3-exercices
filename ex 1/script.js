let today = new Date();

/* premier paragraphe */
let numberToday = today.getDay();
let listDays = ["Sunday", "Monday", "Tuesday", "Wenesday", "Thursday", "Friday", "Saturday"];
let tit = document.getElementById("main");
tit.textContent = "Today is : " + listDays[numberToday] + ".";


/* second paragraphe */
let numberHours = today.getHours();
let numberMinutes = today.getMinutes();
let numberSeconds = today.getSeconds();


let halfDay = "AM";
if (numberHours >= 12) {
    halfDay = "PM"
    numberHours -= 12;
};

let time = document.getElementById("Time");
time.textContent = "Current Time : " + numberHours + " " + halfDay + " : " + numberMinutes + " : " + numberSeconds;