function birthdayCakeCandles(ar) {
    ar = ar.sort();
    console.log(ar);
    let count = 0;
    for (let i = ar.length - 1; i >= 0; i--) {
        if (ar[i] != -1) {
            count++;
        }
        if (ar[i] != ar[i - 1]) {
            break;
        }
    }
    return count;
}

console.log(birthdayCakeCandles([2, 2, 2, 2, 2, 2, 2]));
