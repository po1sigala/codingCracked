//divide two numbers without using multiplication division and mod operator
var divide = function(dividend, divisor) {
    console.log("trying");
    abs = Math.abs(divisor);

    //to divide by 5 for example th edividend must be it plus itsels dividend times
    let quotient = 0;
    let sum = 0;
    //quotient equlas the number of times i must add the divisor to equal the dividend
    while (sum < Math.abs(dividend)) {
        console.log(
            `sum is ${sum} divisor is ${abs} quotent is ${quotient} dividend is ${dividend}`
        );
        sum += abs;
        quotient += 1;
        if (sum >= Math.abs(dividend)) {
            console.log(`${sum} is bigger than ${dividend}`);
            if (divisor < 0 && dividend < 0) {
                console.log("divsor and div less tha 0");
                return quotient + 1;
            } else if (divisor < 0 || dividend < 0) {
                console.log("one is negative");
                quotient += 1;
                return -quotient;
            } else {
                console.log("returning quot");

                return quotient;
            }
        } else {
            console.log(
                `${sum} is less than abs of ${dividend} increasing count`
            );
        }
    }
};

console.log(divide(10, 3));
