var find132pattern = function(nums) {
    /*
    given indexes i,j,k
    i<J<k
    and 
    arr[i]<arr[k]<arr[j]
    132 pattern means arr[]
    */
    let anser = false;
    let smaller = false;
    let bigger = false;
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (j < i && nums[j] < nums[i]) {
                smaller = true;
            }
            if (j > i && nums[j] < nums[i]) {
                console.log(`${nums[j]} is bigger than ${nums[i]}`);
                bigger = true;
            }
        }
        if ((small = true && bigger == true)) {
            anser = true;
        }
        smaller = false;
        bigger = false;
    }
    return anser;
};
console.log(find132pattern([1, 2, 3, 1]));
