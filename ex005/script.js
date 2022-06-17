setInterval(() => {
    let str = document.querySelector(".main").innerText;
    let firstLetter = str.charAt(0);
    let remain = str.substr(1, str.length - 1);
    str = remain + firstLetter;
    document.querySelector(".main").innerText = str;
}, 100);