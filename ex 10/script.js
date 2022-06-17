let result = document.querySelector("#result");

function multiplyBy() {
    let firstnb = document.querySelector("#firstnumber").value;
let secondnb = document.querySelector("#secondnumber").value;
    let r = firstnb * secondnb;
    result.textContent = r;
}

function divideBy() {
    let firstnb = document.querySelector("#firstnumber").value;
let secondnb = document.querySelector("#secondnumber").value;
    let r = firstnb / secondnb;
    result.textContent = r;
}