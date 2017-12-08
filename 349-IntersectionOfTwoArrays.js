var intersection = function(nums1, nums2) {
    var result = [], uniqueResult = [];
    if (nums1.length === 0 || nums2.length ===0) {
        return result;
    }

    for (var i = 0; i < nums1.length; i++) {
        if (nums2.indexOf(nums1[i]) !== -1) {
            result.push(nums1[i]);
        }
    }

    for(var j = 0; j < result.length; j++){
        if(uniqueResult.indexOf(result[j]) === -1) {
            uniqueResult.push(result[j]);
        }
    }

    return uniqueResult;
};
