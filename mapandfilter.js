//USING FILTER
const originalArray = [1, 3, 2, 5, 10];

const evenNumbers = originalArray.filter(function(data) {
    if (data % 2 === 0) {
        return true;
    }
});

const isPrime = num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num !== 1;
};

// 1. A filter that runs through the original array and creates a new array containing only its prime numbers (`primeArray`)
// Use the isPrime function provided to help with this

const filterPrime = arry => {
    return arry.filter(isPrime);
};
console.log(filterPrime(originalArray));
// 2. A filter that runs through the original array and creates a new array containing only its numbers larger than 5(`moreThan5Array`)
const biggerthafive = arry => {
    return arry.filter(number => number > 5);
};
console.log(biggerthafive(originalArray));
//USING MAP

// Complete the following

// 1. A map that triples the originalArray and sets the result equal to a new `tripledArray` array
const trippled = arry => {
    return arry.map(number => number * 3);
};
console.log(trippled(originalArray));
// 2. A map that takes the originalArray and returns a new array `oddOrEven`
// containing the text "even" if the number is even and the text "odd" if the number is odd
// i.e. using this map, the array [3, 1, 2, 4] should give us back ["odd", "odd", "even", "even"]
const oddeven = arry => {
    return arry.map(number => (number % 2 === 0 ? "even" : "odd"));
};
console.log(oddeven(originalArray));
