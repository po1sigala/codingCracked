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
        if (arr[i] === 0) {
            zeroes++;
        } else if (arr[i] < 0) {
            negative++;
        } else if (arr[i] > 0) {
            positive++;
        } else {
            console.log(
                `something weird is happening with the array at i it is ${arr[i]}`
            );
        }
    }
    console.log(
        `${positive / total}
        ${negative / total}
        ${zeroes / total}`
    );
}

console.log(plusMinus([1, 1, 0, -1, -2]));
