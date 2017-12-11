var reverse = function(x) {
    var y = Number(String(Math.abs(x)).split('').reverse().join(''));
    if (y >= 2 ** 31) {
        return 0;
    } else if (x < 0) {
        return -y;
    } else {
        return y;
    }
};
