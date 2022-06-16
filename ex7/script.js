for(let i = 2014; i < 2050; i++) {
    let day = new Date(i, 0, 1);
    let dayweek = day.getDay();
    if (dayweek === 0) {
        console.log("1st January is being a Sunday  "+ i );
    }
}