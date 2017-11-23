// 汉明距离
var hammingDistance = function(x, y) {
    var x0 = zeroPad(parseInt(x).toString(2));
    var y0 = zeroPad(parseInt(y).toString(2));
    var counter = 0;
    for (var i = 0; i < 32; i++) {
        if (x0.charAt(i) !== y0.charAt(i)) {
            counter++;
        }
    }
    return(counter);
};

var zeroPad = function(num) {
    var str = String(num);
    while (str.length < 32) {
        str = '0' + str;
    }
    return str;
};
