var singleNumber = function(nums) {
    var aggregate = 0;
    for (var i = 0; i < nums.length; ++i) {
      aggregate ^= nums[i];
    }

    return aggregate;
};
