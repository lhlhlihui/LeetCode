var rotate = function(nums, k) {
        if (k === 0) return;

        nums.unshift(nums.pop());
        rotate(nums, k - 1);
};
