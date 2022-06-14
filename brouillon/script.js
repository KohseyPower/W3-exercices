let today = new Date();

let dayNumber = today.getDay();
let listDays = ["Sunday", "Monday", "Tuesday", "Wenesday", "Thursday", "Friday", "Saturday"]

document.querySelector(".todayIs").textContent = "Today is :" + " " + listDays[dayNumber] + ".";

let nowTime = today.toLocaleTimeString();
document.querySelector(".currentTime").textContent = "Current time is : " + " " + nowTime + ".";