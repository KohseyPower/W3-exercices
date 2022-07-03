function beginByJava(s) {
    if (s.substring(0, 4) === "Java") {
        return true;
    }
    return false;
}

console.log(beginByJava("Kohsey"));
console.log(beginByJava("Javascript"));
console.log(beginByJava("javaJava"));