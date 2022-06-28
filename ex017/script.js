function difference(a) {
    if (a <= 19) {
        return 19 - a;
    } else {
        return 3 * Math.abs(19 - a);
    }
}

console.log(difference(19));
console.log(difference(24));