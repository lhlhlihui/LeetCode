var distributeCandies = function(candies) {
    var n = new Set(candies).size;
    return Math.min(candies.length / 2, n);
};
