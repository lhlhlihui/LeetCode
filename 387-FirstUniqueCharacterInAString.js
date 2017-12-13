var firstUniqChar = function(s) {
    for (var i = 0; i < s.length; i++) {
        var key = s.charAt(i);
        if (s.indexOf(key) === s.lastIndexOf(key)) return i;
    }

    return -1;
};
