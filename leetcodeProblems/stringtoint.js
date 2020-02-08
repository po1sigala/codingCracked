var myAtoi = function(str) {
    const arry = str.split("");

    const firstmatch = /\S/g.exec(str);
    if (/[a-z]/g.test(firstmatch)) {
        return 0;
    }
    const indexNW = firstmatch.index;

    let optional = {
        plusminus: false,
        decimal: false
    };

    let result = [];
    for (i = indexNW; i < arry.length; i++) {
        if (/[0-9-+.]/g.test(arry[i])) {
            switch (arry[i]) {
                case "+":
                case "-":
                    if (optional.plusminus === false) {
                        optional.plusminus = true;
                        result.push(arry[i]);
                    } else {
                        return;
                    }
                    break;
                case ".":
                    return;
                default:
                    result.push(arry[i]);
            }
        }
    }
    result = result.join("");
    console.log(result);
    if (result > -2147483648 && result < 2147483648) {
        return result;
    } else if (result < -2147483648) {
        return -2147483648;
    } else {
        return 2147483648;
    }
};
console.log(myAtoi("42."));
