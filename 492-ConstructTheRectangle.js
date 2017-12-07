var constructRectangle = function(area) {
    var tmp = Math.floor(Math.sqrt(area));
    var result = [];
    for (var i = tmp; ; i--) {
        if (area % i === 0) {
            result.push(area / i, i);
            return result;
        }
    }
};
