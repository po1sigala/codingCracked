let array = [3, 2, 4, 5, 6, 7, 15, 25];
const fizzBuzz = array => {
    array.forEach(element => {
        if (element % 15 === 0) {
            return console.log("fizzbuzz");
        } else if (element % 3 === 0) {
            console.log("fizz");
        } else if (element % 5 === 0) {
            console.log("buzz");
        } else {
            console.log(element);
        }
    });
};

fizzBuzz(array);
