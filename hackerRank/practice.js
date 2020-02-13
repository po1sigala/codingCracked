// swuare matrix calculate sum of its diagonals
//first input is rows and columns since its a box
//only getting two main diagonals and their sum

function diagonalDifference(arrys) {
    // Write your code here

    /*
    1 2 3
    4 5 6
    7 8 9
    */
    //arrys looks like [ [123], [456], [789] ]\\
    let numrows = arrys.longth;
    let LeftSum = 0;
    let rightSum = 0;
    let i;
    let j;
    for (i = 0; i < numrows; i++) {
        LeftSum += arrys[i][i];
    }
    console.log(LeftSum);

    for (j = 0; j < numrows; j++) {
        rightSum += arrys[j][numrows - 1 - j];
    }
    console.log(rightSum);
    return Math.abs(LeftSum - rightSum);
    //going row by row and saying add this umber to the number in the next row at index plus one
}
console.log(
    diagonalDifference(3, [
        [11, 2, 4],
        [4, 5, 6],
        [10, 8, -12]
    ])
);
