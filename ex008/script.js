let number = Math.ceil(Math.random() * 10);

document.addEventListener('keydown', function(e) {
    let inputNumber = document.querySelector("input").value;
    if (number == inputNumber) {

        document.querySelector(".result").textContent = "Good Work";
    } else {
        document.querySelector(".result").textContent = "Not Matched";
    }
})