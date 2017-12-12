var missingNumber = function(nums) {
    var newNums = nums.sort((a, b) => a - b);
    for (var i = 0; ; i++) {
        if (i !== newNums[i]) {
            return i;
        }
    }
};
