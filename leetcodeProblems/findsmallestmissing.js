//find smallest missing int given array of numbers
var firstMissingPositive = function(nums) {
    if (nums.indexOf(1) === -1) {
        return 1;
    }
    const noRepeats = nums
        .sort((a, b) => {
            return b - a;
        })
        .filter((element, i, arry) => {
            return (
                nums.indexOf(element) === i &&
                element > 0 &&
                element - 1 != arry[i + 1]
            );
        });
    console.log(noRepeats);
    return noRepeats[0] - noRepeats[1] === 1
        ? noRepeats[0] + 1
        : noRepeats[0] - 1;
};

console.log(firstMissingPositive([1, 2, 0]));
