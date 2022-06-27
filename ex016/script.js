function sum() {
    a = parseInt(document.querySelector('#firstNumber').value);
    b = parseInt(document.querySelector('#secondNumber').value);
    if (a == b) {
        let r = 3 * (a + b);
        document.querySelector('.result').textContent = r;
    } else {
        let r = a + b;
        document.querySelector('.result').textContent = r;
    }
}