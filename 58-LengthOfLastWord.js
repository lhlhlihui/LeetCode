var lengthOfLastWord = function(s) {
    if (s === '') {
        return 0;
    }

    while (s.charAt(s.length - 1) === ' ') {
        s = s.slice(0, s.length - 1);
    }

    if (s.indexOf(' ') === -1) {
        return s.length;
    } else {
        return s.length - s.lastIndexOf(' ') - 1;
    }
};
