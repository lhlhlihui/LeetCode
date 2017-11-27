var isPowerOfFour = function(num) {
    if (num === 1) {
        return true;
    } else if (num === 0 || num % 4 !== 0) {
        return false;
    } else {
        return isPowerOfFour(num / 4);
    }
};
