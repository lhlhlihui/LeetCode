var isPalindrome = function(x) {
    if (Number(String(x).split('').reverse().join('')) === x) {
        return true;
    } else {
        return false;
    }
};
