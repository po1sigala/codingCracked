//take int two arrays and compare each value at the same indexes iif one is greater than that set is awarded a point return the set with more points
function compareTriplets(a, b) {
    let i;
    let score = [0, 0];
    for (i = 0; i < 3; i++) {
        if (a[i] - b[i] > 0) {
            score[0]++;
        } else if (a[i] - b[i] < 0) {
            score[1]++;
        }
    }
    return score;
}

console.log(compareTriplets([1, 3, 5], [2, 2, 2]));
