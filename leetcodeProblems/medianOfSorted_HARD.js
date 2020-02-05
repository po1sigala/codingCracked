//runtime of O(log(m+n))
//log grwoth taper with time
//take two sorted arrays and return the median of the two combined
var findMedianSortedArrays = function(nums1, nums2) {
    //nums1.length is the biggest number and nums2[0] is smallest of that one
    //i dont know which is longer and which has the larger numbers

    //an ascending list of numbers
    const combined = nums1.concat(nums2).sort();
    let median = 0;

    const middleFloor = Math.floor(combined.length / 2);
    switch (combined.length % 2) {
        case 0:
            console.log("length was even");
            return (median =
                (combined[middleFloor] + combined[middleFloor - 1]) / 2);

        case 1:
            console.log("length was odd");
            return (median = combined[Math.ceil((combined.length - 1) / 2)]);
    }
};
console.log("should get 3.5");
console.log(findMedianSortedArrays([1, 2, 3], [4, 5, 6, 7]));
