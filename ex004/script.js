let a = 5;
let b = 6;
let c = 7;


let semi = 0.5 * (a + b + c);
let area = Math.sqrt((semi * (semi - a) * (semi - b) * (semi - c)));

document.querySelector(".main").textContent = "The surface of the triangle is " + area;