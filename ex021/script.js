function py(a) {
    if (a.indexOf('Py') === 0) {
        return a;
    } else {
        return "Py" + a;
    }
}

console.log(py("Python"));
console.log(py("thonPy"));

// hey 
