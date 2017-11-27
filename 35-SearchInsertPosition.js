var searchInsert = function(nums, target) {
    var i = 0;
    while (nums[i] < target) {
        i++;
    }

    return i;
};
