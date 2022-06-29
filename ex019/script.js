function within20(a) {
    if (Math.abs(a-100) <= 20 ){
        return "the number is within 20 of 100";
    } else if (Math.abs(a-400) <= 20) {
        return "the number is within 20 of 400";
    } else {
        return "the number is too far from 100 or 400";
    }
}

console.log(within20(80));
console.log(within20(420));
console.log(within20(300));