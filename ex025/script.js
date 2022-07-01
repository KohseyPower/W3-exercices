function multiple(nb) {
    if (nb % 3 === 0) {
        return nb + " is a multiple of 3";
    }
    if (nb % 7 === 0) {
        return nb + " is a multiple of 7";
    }
    return nb + " is not a multiple of both 3 and 7";
}

console.log(multiple(9));
console.log(multiple(14));
console.log(multiple((10)))