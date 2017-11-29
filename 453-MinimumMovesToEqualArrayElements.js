var minMoves = function(nums) {
    var result = 0;
    var min = ArrayMin(nums);
    for (var i = 0; i < nums.length; i++) {
        result += nums[i] - min;
    }

    return result;
};

var ArrayMin = function(nums) {
    var min = nums[0];
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
    }

    return min;
};
