//compute the sume using a for loop, while loop, and recursion
let tobesummed = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i = 0;
let sum = 0;
//for loop
// for (i = 0; i < tobesummed.length; i++) {
//     sum += tobesummed[i];
//     console.log(sum);
// }
//while loop
// while (i < tobesummed.length) {
//     sum += tobesummed[i];
//     i++;
//     console.log(sum);
// }
//recursion
function addNumbers(number) {
    if (tobesummed.indexOf(number) === tobesummed.length - 1) {
        sum += number;
        return console.log(`final sum is ${sum}`);
    } else {
        sum += number;
        i++;
        addNumbers(tobesummed[i]);
    }
}
addNumbers(tobesummed[i]);
