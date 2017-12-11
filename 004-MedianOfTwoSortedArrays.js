var findMedianSortedArrays = function(nums1, nums2) {
    var array = nums1.concat(nums2).sort((a, b) => a - b);
    if (array.length % 2 === 0) {
        return (array[array.length / 2 - 1] + array[array.length / 2]) / 2;
    } else {
        return array[(array.length - 1) / 2];
    }
};
