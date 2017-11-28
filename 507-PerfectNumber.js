var checkPerfectNumber = function(num) {
    var i = 2, sum = 1;
    while (i * i <= num) {
        if (num % i === 0) {
            if (i * i === num) {
                sum += i;
            } else {
                sum += i + num / i;
            }
        }

        i++;
    }

    return num === 1 ?  false :  num === sum;
};
