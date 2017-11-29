var countPrimes = function(n) {
    if (n < 3) {
        return 0;
    }

    var counter = 1;
    for (var i = 3; i < n; i += 2) {
        if (isPrime(i)) {
            counter++;
        }
    }

    return counter;
};

var isPrime = function(n) {
    if (n === 0 || n === 1 || n === 4) {
        return false;
    } else if (n === 2 || n === 3) {
        return true;
    }

    for (var i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
};
