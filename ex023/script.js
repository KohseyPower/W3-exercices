function changePosition(s) {
    // Validation
    if (s.length < 1) {
        return "Your string should be greater or equal to 1.";
    }

    // Application
    let newString = "";
    for (let i = 0; i <= s.length; i++) {
        let a = s.charAt(s.length - i);
        newString = newString + a;
    }
    return newString;
}

console.log(changePosition("bonjour"));
console.log(changePosition("kayak"));
console.log(changePosition("b"));
console.log(changePosition(""));