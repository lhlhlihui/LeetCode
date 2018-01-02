var dominantIndex = function(nums) {
    var indexOfMax = nums.indexOf(Math.max(...nums));
    var sortNums = nums.sort((a, b) => a - b);
    for (var i = 0; i < nums.length - 1; i++) {
        if (sortNums[i + 1] !== sortNums[i] && sortNums[i + 1] < sortNums[i] * 2) return -1;
    }

    return indexOfMax;
};
