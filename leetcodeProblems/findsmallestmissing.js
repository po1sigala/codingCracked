//find smallest missing int given array of numbers
var firstMissingPositive = function(nums) {
    let sorted = nums.sort((a, b) => {
        return a - b;
    });

    sorted = sorted.filter((element, i) => {
        return sorted.indexOf(element) === i;
    });

    const missing = () => {
        if (sorted.indexOf(1) === -1) {
            return 1;
        }
        for (i = 0; i < sorted.length; i++) {
            if (sorted[i] + 1 != sorted[i + 1] && sorted[i] + 1 > 0) {
                return sorted[i] + 1;
            }
        }
    };

    return missing();
};

console.log(firstMissingPositive([1, 2, 0]));
