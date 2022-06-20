let c = document.querySelector("input").value;
console.log(c);

function convert(c) {
    return  ((9 * c + 32 * 5)/5);
}

let r = convert(c);

document.querySelector(".result").textContent = r;