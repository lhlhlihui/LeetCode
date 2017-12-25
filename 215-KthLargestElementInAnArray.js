var findKthLargest = function(nums, k) {
    return quickSort(nums)[nums.length - k];
};

var quickSort = function(ary) {
    if (ary.length < 2) return ary.slice();

    var pivot = ary[Math.floor(Math.random() * ary.length)];
    var left = [];
    var middle = [];
    var right = [];
    for (var i = 0; i < ary.length; i++) {
        var val = ary[i];
        if (val < pivot) left.push(val);
        if (val === pivot) middle.push(val);
        if (val > pivot) right.push(val);
    }

    return quickSort(left).concat(middle, quickSort(right));
};
