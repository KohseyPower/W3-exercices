let number = Math.ceil(Math.random() * 10);
let inputNumber = document.querySelector("input");

if (number === inputNumber) {
    document.querySelector("p").textContent = "Good Work";
} else {
    document.querySelector("p").textContent = "Not Matched";
}