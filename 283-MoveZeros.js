var moveZeroes = function(nums) {
    for (var i = 0, j = 0; j < nums.length; j++) {
        if (nums[j] !== 0) {
            nums[i] = nums[j];
            i++;
        }
    }

    for (; i < nums.length; i++) {
        nums[i] = 0;
    }
};
