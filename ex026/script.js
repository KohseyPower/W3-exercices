function threeCaract(s) {
    if (s.length >= 3) {
        let a = s.substring(s.length - 3);
        return a + s + a;
    }
    return s
}

console.log(threeCaract("abc"));
console.log(threeCaract("Kohsey"));
console.log(threeCaract("a"));