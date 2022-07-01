function remove_character(str, char_pos) {
    let a = str.substring(0, char_pos);
    let b = str.substring(char_pos + 1, str.length);
    return (a + b);
}

console.log(remove_character("Python", 0));
console.log(remove_character("Python", 3));
console.log(remove_character("Python", 5));