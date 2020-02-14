//divide two numbers without using multiplication division and mod operator
var divide = function(dividend, divisor) {
    console.log("trying");

    //to divide by 5 for example th edividend must be it plus itsels dividend times
    let quotient = 0;
    let sum = 0;
    //quotient equlas the number of times i must add the divisor to equal the dividend
    for (i = 0; i < divisor + 1; i++) {
        console.log(
            `sum is ${sum} divisor is ${divisor} quotent is ${quotient}`
        );
        sum += divisor;
        if (sum > dividend) {
            console.log(`${sum} is bigger than ${dividend}`);
            return quotient;
        }
        quotient += 1;
    }
};

console.log(divide(15, 5));
