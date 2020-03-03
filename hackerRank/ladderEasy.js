function staircase(n) {
    let returnString = "";
    for (let i = n; i > 0; i--) {
        let line = "";
        for (let j = 0; j < n; j++) {
            switch (j >= i - 1) {
                case true:
                    line = line + "#";
                    break;
                case false:
                    line = line + " ";
                    break;
                default:
            }
        }
        returnString = returnString + line + "\n";
    }
    return returnString;
}

console.log(staircase(4));
