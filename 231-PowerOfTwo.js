var isPowerOfTwo = function(n) {
    if (n === 1) {
        return true;
    } else if (n === 0 || n % 2 !== 0) {
        return false;
    } else {
        return isPowerOfTwo(n / 2);
    }
};
