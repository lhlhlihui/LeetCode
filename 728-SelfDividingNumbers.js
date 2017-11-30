var selfDividingNumbers = function(left, right) {
    var result = [];
    for (var i = left; i <= right; i++) {
        if (jud(i)) {
            result.push(i);
        }
    }

    return result;
};

var jud = function(n) {
    var n_str = String(n);
    for (var i = 0; i < n_str.length; i++) {
        if (Number(n_str[i]) === 0 || n % Number(n_str[i]) !== 0) {
            return false;
        }
    }

    return true;
};
