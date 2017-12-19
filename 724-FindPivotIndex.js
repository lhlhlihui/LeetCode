var pivotIndex = function(nums) {
    var l = nums.length;
    var sum = nums.reduce((a, b) => a + b, 0);
    var leftSum = 0;

    if (sum === nums[0]) return 0;
    
    for (var i = 1; i < l - 1; i++) {
        leftSum += nums[i - 1];
        if (leftSum === sum - leftSum - nums[i]) return i;
    }
    
    if (sum === nums[l - 1]) return l - 1;
    return -1;
};
