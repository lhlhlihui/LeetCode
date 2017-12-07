var constructRectangle = function(area) {
    var tmp = Math.floor(Math.sqrt(area));
    var result = [];
    for (var i = tmp; i > 0; i--) {
        if (area % i === 0) {
            result.push(area / i);
            result.push(i);
            return result;
        }
    }
};
