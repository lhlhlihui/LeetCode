var twoSum = function(numbers, target) {
    var l = 0, r = numbers.length - 1;
    var result = [];
    while (numbers[l] + numbers[r] !== target) {
        if (numbers[l] + numbers[r] > target) {
            r--;
        } else {
            l++;
        }
    }

    result.push(l + 1);
    result.push(r + 1);
    return result;
};
