var isNumber = function(s) {
    let convert = parseInt(s);
    switch (typeof convert) {
        case "number":
            console.log(convert);
            console.log(isNaN(convert));
            isNaN(convert) === true ? false : true;
        default:
            return false;
    }
};

console.log(isNumber("2"));
