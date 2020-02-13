function aVeryBigSum(ar) {
    let sum = 0;
    ar.map(integer => {
        sum += integer;
    });
    return sum;
}
console.log(aVeryBigSum([1, 2]));
