let a = document.querySelector(".year");

a.addEventListener("input", function(e) {
    e.preventDefault()
    if (a.value % 400 === 0) {
        document.querySelector(".result").textContent = a.value + " is a leap year.";
    } else if (a.value % 4 === 0 && a.value % 100 != 0) {
        document.querySelector(".result").textContent = a.value + " is a leap year";
    } else {
        document.querySelector(".result").textContent = a.value + " is NOT a leap year";
    }
});