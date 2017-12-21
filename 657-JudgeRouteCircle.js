var judgeCircle = function(moves) {
    var hor = 0, ver = 0;
    for (var i = 0; i < moves.length; i++) {
        switch (moves.charAt(i)) {
        case 'U':
            ver++;
            break;
        case 'D':
            ver--;
            break;
        case 'L':
            hor++;
            break;
        case 'R':
            hor--;
            break;
        }
    }

    return hor === 0 && ver === 0;
};
