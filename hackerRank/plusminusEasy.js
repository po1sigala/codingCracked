/*
given array of ints calculte fraction that are positive negative or zero
return decimal verion
*/
function plusMinus(arr) {
    let total = arr.length;
    let positive = 0;
    let negative = 0;
    let zeroes = 0;
    for (let i = 0; i < total; i++) {
        if (arry[i] === 0) {
        } else if (arry[i] < 0) {
        } else if (arr[i] > 0) {
        } else {
            console.log(
                `something weird is happening with the array at i it is ${arr[i]}`
            );
        }
    }
}

console.log(plusMinus([1, 1, 0, -1, -2]));
