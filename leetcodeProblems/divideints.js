//divide two numbers without using multiplication division and mod operator
var divide = function(dividend, divisor) {
    console.log("trying");
    abs = Math.abs(divisor);

    //to divide by 5 for example th edividend must be it plus itsels dividend times
    let quotient = 0;
    let sum = 0;
    //quotient equlas the number of times i must add the divisor to equal the dividend
    for (i = 0; i < abs + 1; i++) {
        console.log(`sum is ${sum} divisor is ${abs} quotent is ${quotient}`);
        sum += abs;
        if (sum > Math.abs(dividend)) {
            console.log(`${sum} is bigger than ${dividend}`);
            if (divisor < 0 && dividend < 0) {
                return quotient;
            } else if (divisor < 0 || dividend < 0) {
                return -quotient;
            } else {
                return quotient;
            }
        }
        quotient += 1;
    }
};

console.log(divide(-2147483648, -1));
