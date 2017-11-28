var checkPerfectNumber = function(num) {
    var sum = 1;

    if (num === 1) {
        return false;
    }

    for (var i = 2; i * i <= num; ++i) {
        if (num % i === 0) {
            sum += i;
            if (i * i !== num) {
                sum += num / i;
            }
        }
    }
    
    return sum === num;
};
