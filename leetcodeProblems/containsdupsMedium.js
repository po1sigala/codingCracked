var containsNearbyAlmostDuplicate = function(nums, k, t) {
    //getting an arry of nums
    //fin dif there are two locations in the array where abs diff between the two numbers at [i]and [j] is <=t
    //and the corresposdnig difference between the indexes i and j is <= k

    //create a double loop but add some limiters based on the index and k
    // for (var i = 0; i < nums.length - 1; i++) {
    //     for (var j = i + 1; j < nums.length; j++) {
    //         if (Math.abs(nums[i] - nums[j]) <= t && Math.abs(i - j) <= k) {
    //             return true;
    //         }
    //     }
    // }
    // return false;
    //return true or false
    let answer = false;
    nums.map((num, i, arry) => {
        let j = i + 1;
        nums.map(number => {
            if (Math.abs(nums[i] - nums[j]) <= t && Math.abs(i - j) <= k) {
                answer = true;
            }
            j++;
        });
    });
    return answer;
};
console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3));
