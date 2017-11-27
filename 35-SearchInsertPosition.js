var searchInsert = function(nums, target) {
    if (target <= nums[0]) {
        return 0;
    } else {
        var i = 0;
        while (nums[i] < target) {
            i++;
        }

        return i;
    }
};
