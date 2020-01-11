//printer returns a string of letters a-m
//when it errors it will print a different letter
//return the number of errors as a fraction. do not reduce
function printerError(s) {
    //if any of these letters are here its got errors

    switch (/[nopqrstuvwxyz]/g.test(s)) {
        case true:
            let errorCount = 0;
            let stringtoarray = s.split("");
            stringtoarray.forEach(letter => {
                if (/[nopqrstuvwxyz]/g.test(letter)) {
                    errorCount++;
                }
            });
            return `${errorCount}/${s.length}`;
            break;
        case false:
            return `0/${s.length}`;
            break;
    }
}
console.log(printerError("nopqrs"));
