var findTheDifference = function(s, t) {
    var sortedS = s.split('').sort();
    var sortedT = t.split('').sort();
    for (var i = 0; i < t.length; i++) {
        if (sortedT[i] !== sortedS[i]) {
            return sortedT[i];
        }
    }
};
