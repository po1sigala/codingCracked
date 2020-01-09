//compute the sume using a for loop, while loop, and recursion
let tobesummed = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//for loop
let sum = 0;
// for (i = 0; i < tobesummed.length; i++) {
//     sum += tobesummed[i];
//     console.log(`sum is ${sum}`);
// }

//while loop
let i = 0;
// while (i < tobesummed.length) {
//     sum += tobesummed[i];
//     i++;
//     console.log(`using while loop sum is ${sum}`);
// }
//recursion
function addNumbers(number) {
    console.log("funning add numbers");
    //if its the last number end after execution
    if (tobesummed.indexOf(number) === tobesummed.length - 1) {
        sum += number;
        return console.log(`final sum is ${sum}`);
    }
    if (tobesummed.indexOf(number) === -1) {
        return "not a number in the array";
    } else {
        console.log("adding");
        sum += number;
        i++;
        addNumbers(tobesummed[i]);
    }
}
addNumbers(tobesummed[i]);
//take two arrays and combine them togetehr

let arry1 = ["a", "b", "c", "d"];
let arry = [0, 1, 2, 3, 4];

for (i = 0; i < arry1.length; i++) {}
