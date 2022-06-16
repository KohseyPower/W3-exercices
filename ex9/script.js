let d = new Date();
let christmasD = new Date(2022, 11, 24);

let i = 0;
while (d.getTime() != christmasD.getTime()) {
    i = i+1;
    d.setDate(d.getDate() + 1);

}
console.log("There is " +" "+ i + " days before christmas !");