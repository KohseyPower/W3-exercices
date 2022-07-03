function checkScript(s) {
    if (s.substring(4, 10) === "Script") {
        s = s.substring(0, 4) + s.substring(10, s.length);
    }
    return s;
}

console.log(checkScript("JavaScript"));
console.log(checkScript("CoffeeScript"));