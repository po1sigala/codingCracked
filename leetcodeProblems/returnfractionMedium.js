var fractionToDecimal = function(numerator, denominator) {
    let decimal = numerator / denominator;
    let remainder = numerator % denominator;
    return remainder;
    /*
    2/ 3 becomes 20/3
    3 goes into 20 6 times
    the remainder is 2 which is the same as the original dividend 
    so lets track original dividend adn if the next one is the sam ewe know it will repeat
    */
};
console.log(fractionToDecimal(5, 2));
