var isHappy = function(n) {
    while (n !== 1 && n !== 4) {
        n = quadraticSum(n);
    }

    return n === 1;
};

var quadraticSum = function(n) {
    n_str = String(n);
    var sum = 0;
    for (var i = 0; i < n_str.length; ++i) {
        sum += Number(n_str[i]) ** 2;
    }

    return sum;
};
