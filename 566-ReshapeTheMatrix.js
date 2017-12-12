var matrixReshape = function(matrix, r, c) {
    var flatMatrix = [].concat(...matrix);
    var result = [];
    if (r * c !== flatMatrix.length) {
        return matrix;
    }
    
    for (var i = 0; i < flatMatrix.length; i += c) {
        result.push(flatMatrix.slice(i, i + c));
    }

    return result;
};
