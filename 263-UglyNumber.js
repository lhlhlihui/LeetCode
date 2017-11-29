var isUgly = function(num) {
    if (num <= 0) {
        return false;
    }

    for (var k of [2, 3, 5]) {
        while (num % k === 0) {
            num /= k;
        }
    }

    return num === 1;
};
